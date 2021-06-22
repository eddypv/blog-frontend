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
const setToken = (newToken) =>{
  token = newToken
}

export default { getAll, setToken }