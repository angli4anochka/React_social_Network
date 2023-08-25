import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {


  return (
    <div>
<div><img src = 'https://avatars.mds.yandex.net/i?id=96efd8537f8b5eecd0d45eab2d53eaf887d3b4c1-10375548-images-thumbs&n=13'></img>
<div className= {classes.descriptionBlock}>Avatar + description</div>
</div>
</div>
)
}

export default ProfileInfo