import './Notification.css'
import React from 'react'
export default function Notification({ message, type }){
  if(message.trim() === ''){
    return null
  }
  return (
    <p className={`Notification ${type}`}>{message}</p>
  )
}