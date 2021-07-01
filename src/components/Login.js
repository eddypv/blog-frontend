import { useState } from 'react'
import propTypes from 'prop-types'
import React from 'react'

function Login({ handleLogin }){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeUsername = ({ target }) => {
    setUsername(target.value)
  }
  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const success = await handleLogin(username, password)
    if(success){
      setPassword('')
      setUsername('')
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
Login.propTypes ={
  handleLogin:propTypes.func.isRequired
}
export default Login