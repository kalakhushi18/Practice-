import React from 'react'
import ReactDOM from 'react-dom'

function Portalsdemo() {
    return ReactDOM.createPortal(
        <div>
          <h1>Portal</h1>  
        </div>
    ,
    document.getElementById("portal_root")
    )
}

export default Portalsdemo
