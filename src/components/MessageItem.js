import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/icon.svg";

const MessageItem = (date, profileImageUrl, text, username) => (
	<div>
		<img src={ profileImageUrl || DefaultProfileImg }
			alt={username}
			height="100px"
			width="100px"
			className="timeline-image"
		/>
		<div className="message-area">
			<Link to={`/users/${username}`}>@{username}</Link>
			<span className="text-muted">
				<Moment className="text-muted" format="DD MM YY">
					{date}
				</Moment>
			</span>
			<p>{text}</p>
		</div>
	</div>
)
export default MessageItem;