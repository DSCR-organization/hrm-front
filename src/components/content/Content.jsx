import React from 'react'
import "./Content.css"
function Content(props) {
    return (
        <div className={props.show ? "toggle-main main" : "main"}>
          {props.children}
      </div>
    )
}

export default Content
