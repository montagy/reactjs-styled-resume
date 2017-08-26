import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import { SWITCH_LANG } from './actions';

injectGlobal`* {
  box-sizing: border-box;
}
html {
  font-size: 100%;
}
html, body {
  height: 100%;
}
html, body, p, h1 {
  margin: 0;
}
body {
  font-family: arial, helvetica, sans-serif;
  background-color: color(var(--baseColor) b(+10%));
  overflow: hidden;
  line-height: 1.5;
}
a {
  text-decoration: none;
  &:visited {
    color: #7d5d8a;
  }
}`;

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
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
