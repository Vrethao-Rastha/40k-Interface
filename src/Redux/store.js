import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

 export default () => createStore(rootReducer, applyMiddleware(thunk, logger))
