import React from "react";
import "../Dialogs/Dialogs.css";
import DialogItem from "./DilalogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


function Dialogs(props) {

  let dialogElements = props.state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/>)
  let messageElements = props.state.messages.map(m =>  <MessageItem message={m.message}/>)

  return(
    <div className="dialogs">
      <div className="dialog-items">
       { dialogElements }
      </div>     
      <div className="message-items">
        { messageElements }
      </div>
    </div>
  )
}

export default Dialogs;