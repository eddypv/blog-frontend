import Blog from './Blog'

export default function Blogs({user, blogs, handleLogout}){

    return (
        <div>
            <h1>Blogs</h1>
            <div>
                <p>{user.name} logged In</p>
                <button type="button" onClick={handleLogout}>Logout</button>
            </div>
            <div>
                {blogs.map( item => <Blog key={item.id} title={item.title} author={item.author} />)}
            </div>
        </div>
    )
}