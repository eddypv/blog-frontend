import './Notification.css'
export default function Notification({message, type}){
    if(message.trim() === ""){
        return null
    }
    return (
        <p className={`Notification ${type}`}>{message}</p>
    )
} 