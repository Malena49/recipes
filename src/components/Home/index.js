import React from 'react';
import PropTypes from 'prop-types';

import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

const Home = ({ recipes }) => (
  <Page>
    <AppHeader />
    <Content
      title="Les recettes oRecipes"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      recipes={recipes}
    />
  </Page>
);

Home.propTypes = {
  recipes: PropTypes.array,
};

export default Home;
