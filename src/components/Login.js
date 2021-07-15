import { useState } from 'react'

import React from 'react'
import { login } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch= useDispatch()
  const handleChangeUsername = ({ target }) => {
    setUsername(target.value)
  }
  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      await dispatch(login(username, password))
      setPassword('')
      setUsername('')
    }catch(error){
      dispatch(
        setNotification(error.message,'error'
        )
      )
    }


  }
  return(
    <div>
      <div>
        <h1>Log in to application</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input type="text"  value={username} onChange={handleChangeUsername}/>
        </div>
        <div>
          <label>password</label>
          <input type="password"  value={password} onChange={handleChangePassword}/>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )


}

export default Login