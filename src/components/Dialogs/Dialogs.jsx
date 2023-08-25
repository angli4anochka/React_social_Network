import React from "react"
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Messages from "./Messages/Messages"




const Dialogs = (props) => {

    let messageElements = props?.msg?.map(msgs => <Messages message = {msgs.message} id = {msgs.id} /> )

console.log(props.msg)


let dialogElements = props?.DialogsData?.map
.map(dialog => <DialogItem name= {dialog.name} id={dialog.id} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>

        <div className ={classes.messages}>
            {messageElements}
        </div>
        </div>
    )
}


export default Dialogs