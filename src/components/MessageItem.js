import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Icon from "../images/Icon";

const MessageItem = ({date, profileImageUrl, text, username, removeMessage, isCorrectUser, userId, msgId}) => (
	<li className="list-group-item message-item p-3">
		{/* profile image or backup icon */}
		{profileImageUrl ? (
			<img src={profileImageUrl}
				alt={username}
				className="message-item__image img-fluid"
			/>
			) : (
				<Icon classes="message-item__image" size="100"/>
			)
		}
		<div className="ml-2">
			<Link to={`/users/${userId}/messages`}>@{username}</Link>
			<Moment className="text-muted ml-2" fromNow>
				{date}
			</Moment>
			<p className="text-break">{text}</p>
		</div>
		{/* Show/hide buttons if author logged in */}
		{isCorrectUser && (
			<div className="btn-container">
				<Link to={`/users/${userId}/messages/${msgId}/edit`} 
				 className="btn btn-warning message-item__btn message-item__btn--edit">
					Edit
				</Link>
				<button className="btn btn-danger message-item__btn message-item__btn--delete" onClick={removeMessage}>
					Delete
				</button>
			</div>
		)}
	</li>
);

export default MessageItem;
