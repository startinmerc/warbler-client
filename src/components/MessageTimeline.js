import React, { Component } from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeline = props => {
	return (
		<div className="row">
			<UserAside />
			<MessageList profileImageUrl={props.profileImageUrl} username={props.username} />
		</div>
	);
};

export default MessageTimeline;