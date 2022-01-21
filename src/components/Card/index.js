import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import{setRecipe ,setRecipelist} from '../../actions/recipes';
import { useDispatch } from 'react-redux';
import './style.scss';

function Card ({
  thumbnail,
  title,
  difficulty,
  slug,}){
    const dispatch = useDispatch();
    const handleclick=()=>{
      dispatch(setRecipe(slug));
      dispatch(setRecipelist()) 
    }
  return (
  <article className="card">
    <img className="card-img" src={thumbnail} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">Difficulté : {difficulty}</p>
      <Link to={`/recipe/${slug}`} className="card-link" onClick={handleclick}>Voir la recette</Link>
    </div>
  </article>
);
}
Card.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  difficulty: PropTypes.string,
  slug: PropTypes.string,
};

export default Card;
