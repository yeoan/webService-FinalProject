import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
//import Navigation from './components/Navigation/index.js'
import App from './components/your-app.js'
import store from './store';

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('wrapper')
);


// ReactDom.render(
//   <Navigation/>
//   ,
//   document.getElementById('navigation')
// );
