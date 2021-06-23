import Blog from './Blog'

export default function Blogs({user, blogs, handleLogout}){

    return (
        <div>
            <div>
                {blogs.map( item => <Blog key={item.id} title={item.title} author={item.author} />)}
            </div>
        </div>
    )
}