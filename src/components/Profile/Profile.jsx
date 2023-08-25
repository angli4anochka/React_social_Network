import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {

  return (
<div>
  <ProfileInfo />
  <MyPosts posts = {props.posts} />
  <MyPosts posts={props.msg} />
</div>
)
}

export default Profile