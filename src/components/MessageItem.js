import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImg from "../images/icon.svg";
import Cross from "../images/Cross";

const MessageItem = ({date, profileImageUrl, text, username, removeMessage, isCorrectUser}) => (
	<li className="list-group-item d-flex">
		<img src={ profileImageUrl || DefaultProfileImg }
			alt={username}
			height="100px"
			width="100px"
			className="timeline-image"
			style={{backgroundColor: "var(--color2)"}}
		/>
		<div className="ml-2">
			<Link to={`/users/${username}`}>@{username}</Link>
			<span className="text-muted">
				<Moment className="text-muted" format="DD MM YY">
					{date}
				</Moment>
			</span>
			<p>{text}</p>
			
		</div>
		{isCorrectUser &&
				(<button className="btn message--delete-btn" onClick={removeMessage}>
					<Cross size="20" />
				</button>)
			}
	</li>
)
export default MessageItem;