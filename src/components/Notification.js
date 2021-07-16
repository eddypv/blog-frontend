import React from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

export default function Notification(){
  const notification = useSelector(state => state.notification)
  const { message, type } = notification
  if(message.trim() === ''){
    return null
  }
  const variant = type ==='error' ? 'danger' :'success'
  return (
    <Alert className={`Notification ${type}`} variant={variant}>{message}</Alert>
  )
}