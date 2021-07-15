import { userActions } from './actions'
import loginService from '../services/login'
import blogService from '../services/blogs'
export const userReducer = (state = null, action) => {
  switch(action.type){
  case userActions.SET:
    return action.payload.user
  default: return state
  }
}

export const setUser=(user) => {
  return {
    type:userActions.SET,
    payload:{ user }
  }
}
export const login=(username, password) => {
  return async dispatch => {
    const user = await loginService.login(username, password)
    blogService.setToken(user.token)
    window.localStorage.setItem('AppBlogList', JSON.stringify(user))
    await dispatch({
      type:userActions.SET,
      payload:{ user }
    })
  }
}

export const logout = () => {
  window.localStorage.removeItem('AppBlogList')
  return {
    type:userActions.SET,
    payload:{ user:null }
  }
}