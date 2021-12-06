import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from '../pages/App';
export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
