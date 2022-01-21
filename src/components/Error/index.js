import React from 'react';

import Page from '../Page';
import AppHeader from '../AppHeader';
import Content from '../Content';

const Error = () => (
  <Page>
    <AppHeader />
    <Content
      title="Erreur"
      text="Nous sommes désolé, Une erreur s'est produite."
    />
  </Page>
);

export default Error;
