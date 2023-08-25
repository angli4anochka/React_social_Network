import React from "react";
import  classes from'./Navbar.module.css'
import { NavLink} from "react-router-dom";

const Navbar = () => {
return (

<nav className= {classes.nav}>
    <div className={classes.item}>
    <NavLink to ="/profile" activeclassname = {classes.active}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/Dialogs">Messages</NavLink></div>
    </nav>
   
)
  }

  export default Navbar