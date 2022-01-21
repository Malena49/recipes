import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import{setRecipe ,setRecipelist} from '../../actions/recipes';
import { useDispatch } from 'react-redux';
import './style.scss';

function Menu  ({ recipes }) { 
  const dispatch = useDispatch();
  const handleclick=(e)=>{
    const x =e.target.getAttribute('href')
    dispatch(setRecipe(x.substr(8)));
    dispatch(setRecipelist())
  }
  
  return(
  
  <nav className="menu">
    <Link
      className="menu-link menu-link--active"
      to="/"
    >
      Accueil
    </Link>
    {recipes.map((recipe) => (
      <Link
        key={recipe.id}
        onClick={handleclick}
        className="menu-link"
        to={`/recipe/${recipe.slug}`}
      >
        {recipe.title}
      </Link>
    ))}
  </nav>
);
    }
Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
  ),
};

export default Menu;
