import { notificationActions } from './actions'
const DEFAULT_STATE = {
  message:'',
  type:''
}
export const notificationReducer = (state=DEFAULT_STATE, action) => {

  switch(action.type ){
  case notificationActions.SET_NOTIFICATION:
    return action.payload
  default: return state
  }
}

export const setNotification= (message, type) => {

  return dispatch => {
    let action = {
      type:notificationActions.SET_NOTIFICATION,
      payload:{
        message,
        type
      }
    }
    dispatch(action)
    action.payload = DEFAULT_STATE
    setTimeout(() => {
      dispatch(action)
    }, 5000)
  }


}

