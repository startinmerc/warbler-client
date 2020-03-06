import React from "react";
import MessageList from "../containers/MessageList";
import UserCard from "./UserCard";

const MessageTimeline = props => {
	return (
		<div className="row">
			<UserCard profileImageUrl={props.profileImageUrl} username={props.username} userID={props.userID}/>
			<MessageList />
			<div className="col-2 d-none d-md-block adspace"></div>
		</div>
	);
};

export default MessageTimeline;