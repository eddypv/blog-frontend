import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const Togglable =({ showText, closeText,children }) => {
  const [visible, setVisible] = useState(false)

  const hide = { display:'none' }
  const show = { display:'inline-block' }

  const handleToggle = () => setVisible(!visible)
  return(
    <div>
      <div style={!visible ? show : hide}>
        <Button variant="success" className="togglable-button-show" onClick={handleToggle}>{showText}</Button>
      </div>
      <div style={visible ? show : hide }>
        {children}
        <div>
          <Button variant="danger" className="togglable-button-hide" onClick={handleToggle}>{closeText}</Button>
        </div>
      </div>

    </div>
  )
}
export default Togglable