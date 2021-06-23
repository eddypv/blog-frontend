import axios from 'axios'
const baseUrl = '/api/login/'

const login= async (username, password)=>{
    try{
        const response = await axios.post(baseUrl,{username, password})
        return response.data
    }catch(error){
        if(error.response.data.error){
            const customError = new Error(error.response.data.error)
            throw customError
        }else{
            throw new Error('Error service login')
        }
        
    }
    
}
export default { login }


