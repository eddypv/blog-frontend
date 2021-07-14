import { createStore,applyMiddleware,combineReducers } from 'redux'
import { notificationReducer } from './reducers/notificationReducer'
import { blogReducer } from './reducers/blogReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const reducers = combineReducers({
  notification : notificationReducer,
  blogs:blogReducer
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default store