import { useState } from "react"

const Togglable =({buttonText,children}) =>{
    const [visible, setVisible] = useState(false)
    
    const hide = { display:'none'}
    const show = {display:'inline-block'}

    const handleToggle = ()=> setVisible(!visible)
    return(
        <div>
            <div style={!visible ? show : hide}> 
                <button onClick={handleToggle}>{buttonText}</button>
            </div>
            <div style={visible ? show : hide }>
                {children}
                <div>
                    <button onClick={handleToggle}>Close</button>
                </div>
            </div>
            
        </div>
    ) 
}
export default Togglable