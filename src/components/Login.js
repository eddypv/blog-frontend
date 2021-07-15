import { useState } from 'react'
import React from 'react'
import { login } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { useHistory } from 'react-router-dom'
import { blogUrls } from '../utils/urls'
import { Form, Button } from 'react-bootstrap'

function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch= useDispatch()
  const history = useHistory()

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
      history.push(blogUrls.HOME)
    }catch(error){
      dispatch(setNotification(error.message,'error'))
    }
  }
  return(
    <div className="row">
      <div className="col align-items-center">
        <h2>Log in to application</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleChangeUsername}
              value={username}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChangePassword}
              value={password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Login</Button>
        </Form>
      </div>
    </div>
  )


}

export default Login