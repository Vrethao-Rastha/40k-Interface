import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './Redux/store'
import './index.css';
import { fetchFieldReports } from './Redux/Actions/FieldReportActions'
import { fetchVoxDispatch } from './Redux/Actions/VoxDispatchActions'
import App from './App';

let newStore = store()
newStore.dispatch(fetchFieldReports())
newStore.dispatch(fetchVoxDispatch())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
   document.getElementById('root'));
