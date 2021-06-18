import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import Store from './store/store'
import { getPendingIssues } from './store/issues/issues.actions';
import * as types from './store/issues/issues.types'
import { AuthContextProvider } from "./context/AuthContext";
Store.dispatch(getPendingIssues(types.IssueTypes.PENDING))


ReactDOM.render(
  <Provider store={Store}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
  </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
