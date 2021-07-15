import axios from 'axios'
const URL ='/api/users'
let token=null

const getAll = async() => {
  try{
    const config ={
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
    const response = await axios.get(URL, config)
    return response.data
  }catch(error){
    throw new Error('Error Service Users all')
  }
}
const setToken = (newToken) => {
  token = newToken
}

export default { getAll, setToken }