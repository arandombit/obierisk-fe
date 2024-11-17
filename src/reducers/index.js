import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import carriers from './carriers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const rootReducer = combineReducers({
  carriers
})

export default createStoreWithMiddleware(rootReducer)
