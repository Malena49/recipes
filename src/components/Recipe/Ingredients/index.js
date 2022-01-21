// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Ingredients = ({ ingredients }) => (
  <ul className="ingredients">
    {ingredients.map((ingredient) => (
      <li className="ingredient" key={ingredient.id}>
        <span className="ingredient-quantity">
          {ingredient.quantity} {ingredient.unit}
        </span> {ingredient.name}
      </li>
    ))}
  </ul>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      unit: PropTypes.string,
      quantity: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    }).isRequired,
  ).isRequired,
};


// == Export
export default Ingredients;
