import React from "react";
import classes from './DialogItems.module.css'
import { NavLink } from "react-router-dom";



const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id
    return (
<div className={classes.items}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
    )}



export default DialogItem