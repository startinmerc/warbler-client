import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "./UserAside";

const MessageTimeline = props => {
	return (
		<div className="row">
			<UserAside profileImageUrl={props.profileImageUrl} username={props.username} userID={props.userID}/>
			<MessageList />
			<div className="col-2 border border-secondary d-none d-md-block" style={{
				backgroundColor: "var(--color3)"
			}}>
			</div>
		</div>
	);
};

export default MessageTimeline;