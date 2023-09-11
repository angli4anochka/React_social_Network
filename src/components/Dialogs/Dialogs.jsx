import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import TextAreaItem from "./TextAreaItem/TextAreaItem";





const Dialogs = (props) => {


  let messageElements = props.state.msg.map(msg => (
     <Messages message={msg.message} id={msg.id} />
  ));

  let dialogElements = props.state.dialogsData.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} 
    />
  ));

  

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogElements}</div>
      <div className={classes.messages}>{messageElements}</div>
      <TextAreaItem 
      textAreaText ={props.state.textAreaText}
      dispatch = {props.dispatch} />
    </div>
  );
};

export default Dialogs;