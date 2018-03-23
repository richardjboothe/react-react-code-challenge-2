import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from 'store/features/reducers'
import './src/index.scss';
import App from 'components/App';

/*
As you can see, there's no middleware included here.
So to make things a little easier for you I've added the redux-devtools-extension.
documentation found here: https://github.com/zalmoxisus/redux-devtools-extension
*/

let store = createStore(rootReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
