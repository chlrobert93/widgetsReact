import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "semantic-ui-css/semantic.min.css";
import './stylo.css';

if (module.hot) {
    module.hot.accept();
  }


ReactDOM.render(<App />, document.querySelector('#root'));