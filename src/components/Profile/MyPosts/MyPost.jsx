import React from "react";
import classes from './MyPost.module.css'
import Post from "./post/Post";
import { addPostActionCreator, updateTextAction } from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let newPostElement = React.createRef();
   
    let PostElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
 
  
    let addPost = () => {
       props.addPost()
      //props.dispatch(addPostActionCreator());
    };
  
    let postChange = (e) => {
      let text = e.target.value;
      props.updateTextAction(text)
      //props.dispatch(updateTextAction(text));
    };
  
    return (
      <div className={classes.postBlock}>
        <h3>My Posts</h3>
        <div>
          <textarea
            onChange={postChange}
            value={props.newPostText} // Bind the value here
            ref={newPostElement}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <button>Remove post</button>
        <div>New posts</div>
        <div className={classes.posts}>{PostElements}</div>
      </div>
    );
  }

export default MyPosts