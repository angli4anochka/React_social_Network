import React from "react";
import classes from './MyPost.module.css'
import Post from "./post/Post";



const MyPosts= (props) => {
  console.log(props.posts)
 
let PostElements = props?.posts?.map(post => <Post message = {post.message} likesCount= {post.likesCount} />)


  return (
    <div className = {classes.postBlock}>
      <h3>My Posts</h3>
    <div>
      <textarea></textarea>
      </div>

      <div><button>Add post</button></div>
      <button>Remove post</button>
    <div>New posts</div>
<div className = {classes.posts}>
 {PostElements}
</div>
</div>
  )
}

export default MyPosts

