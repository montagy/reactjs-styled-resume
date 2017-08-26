import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

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
ul {
  padding: 0;
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

const render = Comp => {
  ReactDOM.render(
    <AppContainer>
      <Comp />
    </AppContainer>,
    document.getElementById('root'),
  );
};
render(App);
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}
