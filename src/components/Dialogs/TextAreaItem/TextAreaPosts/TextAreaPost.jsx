import React from "react";
import TextAreaItem from "../TextAreaItem";

const TextAreaPost = (props) => {

  let posts = [
    { id: 1, message: "How are you?", likesCount: 0 },
    { id: 2, message: " my first postIts", likesCount: 12 },
  ]
 


  return (
      <div className >
    <img src = 'https://avatars.mds.yandex.net/i?id=96efd8537f8b5eecd0d45eab2d53eaf887d3b4c1-10375548-images-thumbs&n=13'></img>
      <div> {posts}</div>
      </div>
  ) 
}

export  default TextAreaPost