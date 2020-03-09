import React from "react";
import MessageList from "../containers/MessageList";
import UserCard from "./UserCard";

const MessageTimeline = props => {
	return (
		<div className="row">
			<UserCard profileImageUrl={props.profileImageUrl} username={props.username} userID={props.userID}/>
			<MessageList />
			<div className="col-12 col-md-2 mt-3 mt-md-0">
				<div className="adspace" />
			</div>
		</div>
	);
};

export default MessageTimeline;