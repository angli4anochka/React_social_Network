import React from "react";
import { addPostMessage, updateTextMessage} from "../../../redux/dialogs-reducer";


const TextAreaItem = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostMessage())
  }

  let postChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateTextMessage(text))
  }


  return (

    <div>
      <textarea onChange = {postChange} ref = {newPostElement} value = {props.textAreaText}></textarea>
      <button onClick = {addPost}>кнопка</button>
    </div>
  )
}

export default TextAreaItem