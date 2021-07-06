import React from 'react'
import "./Content.css"
function Content(props) {
    return (
        <div className={props.show ? "toggle-main main" : "main"}>
          {props.content}
      </div>
    )
}

export default Content
