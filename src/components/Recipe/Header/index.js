// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Header = ({
  title, thumbnail, author, difficulty,
}) => (
  <header className="presentation">
    <img
      src={thumbnail}
      alt="Bonnes crêpes"
      className="presentation-image"
    />
    <div className="presentation-content">
      <h1 className="presentation-title">{title}</h1>
      <p className="presentation-infos">{author} - {difficulty}</p>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// == Export
export default Header;
