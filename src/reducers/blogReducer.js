import blogService from '../services/blogs'
import { blogActions } from './actions'

export const blogReducer = (state=[], action) => {
  switch(action.type){
  case blogActions.INIT_BLOGS:
    return action.payload
  default: return state
  }

}

export const initBlogs = () => {
  return async dispatch => {
    const blogs =await blogService.getAll()
    dispatch({
      type:blogActions.INIT_BLOGS,
      payload:blogs

    })
  }
}