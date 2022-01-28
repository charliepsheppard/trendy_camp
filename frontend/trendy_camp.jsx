import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchSpots } from './util/spot_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchSpots = fetchSpots();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})
