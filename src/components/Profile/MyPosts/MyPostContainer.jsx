import React from "react";
import { addPostActionCreator, updateTextAction } from "../../../redux/profile-reducer";
import MyPosts from "./MyPost";

const MyPostsContainer = (props) => {
  debugger;

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const postChange = (text) => {
    props.store.dispatch(updateTextAction(text)); 
  }

  return (
    <MyPosts addPost={addPost} postChange={postChange} posts={props.store.posts} />
  );
}

export default MyPostsContainer;