import React from "react";
import "../../Dialogs/Dialogs.css";


function MessageItem(props) {
  return(
    <div className="message">{props.message}</div>
  )
}

export default MessageItem;