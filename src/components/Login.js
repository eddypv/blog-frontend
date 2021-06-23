
export default function Login({username, password, handleSubmitLogin, handleChangeUsername, handleChangePassword }){
    
    return(
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