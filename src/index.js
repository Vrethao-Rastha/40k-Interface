import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import store from './Redux/store'
import './index.css';
import { fetchVoxDispatch } from './Redux/Actions/VoxDispatchActions'
import App from './App';

let newStore = store()

newStore.dispatch(fetchVoxDispatch())

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
   document.getElementById('root'));
