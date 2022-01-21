

export const SET_RECIPE = 'SET_RECIPE';

export const setRecipe = (currentRecipe) => (
    {
      type: SET_RECIPE,
      currentRecipe,
    }
  );

  export const SET_RECIPE_LIST = 'SET_RECIPE_LIST';

  export const setRecipelist = () => (
      {
        type: SET_RECIPE_LIST,
      }
    );
    