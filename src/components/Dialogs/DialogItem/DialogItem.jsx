import React from "react";
import classes from './DialogItems.module.css'
import { NavLink } from "react-router-dom";
import DialogsAvatar from "../DialogsAvatar/DialogsAvatar";



const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
        <div>
    <DialogsAvatar />
<div className={classes.items}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
</div>
    )}



export default DialogItem