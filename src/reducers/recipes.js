import {SET_RECIPE ,SET_RECIPE_LIST } from '../actions/recipes';
import recipes from '../data'
export const initialState = {
  list: [],
  currentRecipe : '/',
  alllist:recipes
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case SET_RECIPE:
      return{
        ...state,
        currentRecipe:action.currentRecipe,     
         
      }
      case SET_RECIPE_LIST:
      return{
        ...state,
        list:state.alllist.filter((recipe)=>recipe.slug === state.currentRecipe), 
         
      }
    
    default:
      return state;
  }
  
};

export default reducer;
