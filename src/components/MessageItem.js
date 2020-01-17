import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Icon from "../images/Icon";
import Cross from "../images/Cross";

const MessageItem = ({date, profileImageUrl, text, username, removeMessage, isCorrectUser}) => (
	<li className="list-group-item d-flex message-item">
		{profileImageUrl ? (
			<img src={profileImageUrl}
				alt={username}
				className="message-item--image img-fluid"
			/>
			) : (
				<Icon className="message-item--image" size="100"/>
			)
		}
		<div className="ml-2">
			<Link to={`/users/${username}`}>@{username}</Link>
			<Moment className="text-muted ml-2" fromNow>
				{date}
			</Moment>
			<p>{text}</p>
		</div>
		{isCorrectUser &&
				(<button className="btn message-item--delete-btn" onClick={removeMessage}>
					<Cross size="20" />
				</button>)
			}
	</li>
)
export default MessageItem;