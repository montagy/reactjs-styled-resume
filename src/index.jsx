import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import { SWITCH_LANG } from './actions';

const changeLang = (state = 'cn', action) => {
  switch (action.type) {
    case SWITCH_LANG:
      return action.lang;
    default:
      return state;
  }
};
const reducers = combineReducers({
  lang: changeLang,
});
const store = createStore(reducers);
render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
