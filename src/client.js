import React from 'react';
import Router from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import routes from './views/routes';
import createRedux from './redux/create';
import { Provider } from 'redux/react';
import ApiClient from './ApiClient';

const history = new BrowserHistory();
const client = new ApiClient();

const destination = document.getElementById('app');
const redux = createRedux(client, window.__data);
const element = (
  <Provider redux={redux}>
    {() => <Router history={history} children={routes}/> }
  </Provider>
);

React.render(element, destination);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger
  const reactRoot = window.document.getElementById('app');

  if (!reactRoot || !reactRoot.firstChild || !reactRoot.firstChild.attributes || !reactRoot.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

