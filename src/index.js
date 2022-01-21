import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.scss';
import App from './components/App';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
