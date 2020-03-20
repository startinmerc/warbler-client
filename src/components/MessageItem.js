import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Icon from "../images/Icon";

const MessageItem = ({createdAt, updatedAt, profileImageUrl, text, username, removeMessage, isCorrectUser, userId, msgId}) => (
	<li className="list-group-item message-item p-0">
		{/* profile image or backup icon */}
		{profileImageUrl ? (
			<img src={profileImageUrl}
				alt={username}
				className="message-item__image img-fluid py-3 pl-3"
			/>
			) : (
				<Icon classes="message-item__image py-3 pl-3" size="100px" color="var(--white)"/>
			)
		}
		<div className="ml-2 message-item__content pl-3 py-2 d-flex flex-column justify-content-between">
			<p className="mb-0">
				<Link to={`/users/${userId}/messages`}>@{username}</Link>
				<Moment className="text-muted ml-2" fromNow>
					{createdAt}
				</Moment>
			</p>
			<p className="text-break mb-0 flex-grow-1">{text}</p>
			{createdAt !== updatedAt && (
				<small className="text-muted">
					(Message edited <Moment format="DD/MM/YYYY">{updatedAt}</Moment>)
				</small>
			)}
		</div>
		{/* Show/hide buttons if author logged in */}
		{isCorrectUser && (
			<div className="btn-container">
				<Link to={`/users/${userId}/messages/${msgId}/edit`} 
				 className="btn btn-outline-warning message-item__btn mt-2 mr-2 py-0">
					Edit
				</Link>
				<button className="btn btn-outline-danger message-item__btn mt-2 mr-2 py-0" onClick={removeMessage}>
					Delete
				</button>
			</div>
		)}
	</li>
);

export default MessageItem;
