import React from "react";
import Friends from "../../../Friends";

const MyFriends = (props) => {
  let FriendsList = props.state.friends.map((friend) => (
    <Friends key={friend.id} data={friend.name} id={friend.id} />
  ));

  return <div>{FriendsList}</div>;
};

export default MyFriends;