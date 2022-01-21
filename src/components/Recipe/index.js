/* eslint-disable arrow-body-style */
// == Import : npm
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react';


// == Import : local
// Composants
import Page from '../Page';
import AppHeader from '../AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe({ recipe }) {

  const location = useLocation();
  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location.pathname],
  );
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
      
      {  recipe.map((Rheader) => <Header key={Rheader.title} {...Rheader} />)}
  
         {  recipe.map((Rin) => <Ingredients key={Rin.title} ingredients={Rin.ingredients} />)}
        {  recipe.map((Rinstru) => <Instructions key={Rinstru.title} instructions={Rinstru.instructions} />)}
      </div>
    </Page>
  );
}

Recipe.propTypes = {
  recipe: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      author: PropTypes.string,
      difficulty: PropTypes.string,
      ingredients: PropTypes.array,
      instructions: PropTypes.array,
    })
  )
};

Recipe.defaultProps = {
  recipe: null,
};

// == Export
export default Recipe;
