import React from "react";
import MessageList from "./MessageList";

const UserProfile = props => {
	const user = props.location.pathname.split("/")[2];
	return (
		<div className="row">
			<div className="col-12 py-5 text-center">
				Showing messages from {user}<br/>
				<small>Yes this is wrong.</small>
			</div>
			<MessageList  fromUser="true" user={user} location={props.location}/>
			<div className="col-12 col-md-2">
				<div className="adspace"/>
			</div>
		</div>
	)
};

export default UserProfile;
