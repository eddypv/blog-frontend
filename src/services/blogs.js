import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null
const getAll = () => {
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const request = axios.get(baseUrl, config)
  return request.then(response => response.data)
}
const AddBlog = async (blog)=>{
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  try{
    const response = await axios.post(baseUrl, blog,config)
    return response.data
  }catch(error){
    if(error.response.data.error){
      throw new Error(error.response.data.error)
    }else{
      throw new Error("service Add blog has errors")
    }
    
    
  }
}
const setLikes = async( id, likes )=>{
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  try{
    const response = await axios.put(`${baseUrl}/${id}`, {likes}, config)
    return response.data
  }catch(error){
    if(error.response.data.error){
      throw new Error(error.response.data.error)
    }else{
      throw new Error("service update blog has errors")
    }
  }
}
const removeBlog = async (id)=>{
  try{
    const config ={
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
    await axios.delete(`${baseUrl}/${id}`, config)

  }catch(error){
    
    if(error.response.data.error){
      throw new Error(error.response.data.error)
    }else{
      throw new Error("service delete blog has errors")
    }
  }
}

const setToken = (newToken) =>{
  token = newToken
}
const services ={ getAll, setToken, AddBlog, setLikes, removeBlog }
export default services