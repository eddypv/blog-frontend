import blogService from '../services/blogs'
import { blogActions } from './actions'

export const blogReducer = (state=[], action) => {
  switch(action.type){
  case blogActions.INIT_BLOGS:
    return [...action.payload.blogs]

  case blogActions.SET_LIKES:{
    const blog = action.payload.blog
    return state.map(item => {
      if(blog.id === item.id){
        return { ...item, likes:blog.likes }
      }else{
        return item
      }
    })
  }

  case blogActions.REMOVE:{
    return state.filter(item => {
      if(action.payload.id !== item.id){
        return item
      }
    })
  }
  default: return state
  }

}

export const initBlogs = () => {
  return async dispatch => {
    const blogs =await blogService.getAll()
    dispatch({
      type:blogActions.INIT_BLOGS,
      payload:{ blogs }

    })
  }
}

export const setLikes = (id, likes) => {
  return async dispatch => {
    const blog =await blogService.setLikes(id, likes)
    console.log(blog)
    dispatch({
      type:blogActions.SET_LIKES,
      payload:{ blog }

    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    await blogService.removeBlog(id)
    dispatch({
      type:blogActions.REMOVE,
      payload:{
        id
      }
    })
  }
}