import React from "react";
import classes from './Friends.module.css'
import FriendsInfo from "./MyFriends/MyFriendsInfo/MyFriendsInfo";
import MyFriends from "./MyFriends/MyFriendsInfo/Myfriendsprofile/MyFriendsprofile";





const Friends = (props) => {
debugger
  return (
<div>
  <FriendsInfo />
  <MyFriends friends = {props.state.friends} />

</div>
)
}

export default Friends