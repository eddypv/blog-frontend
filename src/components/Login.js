import { useState } from "react"

export  function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChangeUsername = ({target})=> {
        setUsername(target.value)
    }
    const handleChangePassword = ({target})=>{
        setPassword(target.value)
    }
    const handleSubmitLogin = (event)=>{
        event.preventDefault()
        console.log(username, password)
    }
    return (
        <div>
            <div>
                <h1>Log in to application</h1>
            </div>
            <form onSubmit={handleSubmitLogin}>
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