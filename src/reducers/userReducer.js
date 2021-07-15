import { userActions } from './actions'
import loginService from '../services/login'
import blogService from '../services/blogs'
import userService from '../services/user'

const initial ={
  userLoggedIn:null,
  users:[]
}
export const userReducer = (state = initial, action) => {
  switch(action.type){
  case userActions.SET:{
    return {
      userLoggedIn: { ...action.payload.user },
      users:[...state.users]
    }
  }
  case userActions.LOGOUT:{
    return {
      userLoggedIn: null,
      users:[]
    }
  }
  case userActions.GET_USERS: {
    return {
      userLoggedIn: { ...state.userLoggedIn },
      users:[...action.payload.users]
    }
  }

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
    userService.setToken(user.token)
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
    type:userActions.LOGOUT,
    payload:{ }
  }
}
export const getUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type:userActions.GET_USERS,
      payload :{
        users
      }
    })
  }
}