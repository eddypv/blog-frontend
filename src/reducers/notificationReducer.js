import { notificationActions } from './actions'
const DEFAULT_STATE = {
  message:'',
  type:''
}
export const notificationReducer = (state=DEFAULT_STATE, action) => {
  console.log(action)
  switch(action.type ){
  case notificationActions.SET_NOTIFICATION:
    return action.payload
  default: return state
  }
}

export const setNotification= (message, type) => {
  console.log(message, type)
  return {
    type:notificationActions.SET_NOTIFICATION,
    payload:{
      message,
      type
    }
  }

}

