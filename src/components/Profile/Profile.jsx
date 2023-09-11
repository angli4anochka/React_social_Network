import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer"; // Import MyPostsContainer

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      {/* Pass the store as 'store' prop */}
      <MyPostsContainer store={props.state} />
    </div>
  )
}

export default Profile;