import React, { Component } from "react";
import MessageList from "../containers/MessageList";

const MessageTimeline = props => {
	return (
		<div className="row">
			<MessageList />
		</div>
	);
};

export default MessageTimeline;