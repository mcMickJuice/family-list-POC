import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import user from './user/reducer'

const createAppStore = () => {
  const reducers = combineReducers({
    user
  })

  return createStore(reducers, applyMiddleware(thunkMiddleware))
}

export default createAppStore
