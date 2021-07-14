import './Notification.css'
import React from 'react'
import { useSelector } from 'react-redux'
export default function Notification(){
  const notification = useSelector(state => state.notification)
  const { message, type } = notification
  if(message.trim() === ''){
    return null
  }
  return (
    <p className={`Notification ${type}`}>{message}</p>
  )
}