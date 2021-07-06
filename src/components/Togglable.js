import React, { useState } from 'react'

const Togglable =({ showText, closeText,children }) => {
  const [visible, setVisible] = useState(false)

  const hide = { display:'none' }
  const show = { display:'inline-block' }

  const handleToggle = () => setVisible(!visible)
  return(
    <div>
      <div style={!visible ? show : hide}>
        <button className="togglable-button-show" onClick={handleToggle}>{showText}</button>
      </div>
      <div style={visible ? show : hide }>
        {children}
        <div>
          <button  className="togglable-button-hide" onClick={handleToggle}>{closeText}</button>
        </div>
      </div>

    </div>
  )
}
export default Togglable