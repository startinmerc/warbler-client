import React from "react";
import { Link } from "react-router-dom";
import Icon from "../images/Icon";

const UserProfileHeader = ({url, isCorrectUser, user = {}}) => {
	return (
		<div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-between rounded white-border p-3">
			{/* profile image or backup icon */}
			{user.profileImageUrl ? (
				<img src={user.profileImageUrl}
					alt={user.username}
					className="message-item__image img-fluid"
				/>
				) : (
					<Icon classes="message-item__image" size="100px" color="var(--white)"/>
				)
			}
			<div className="text-center">
				<h2>@{user.username}</h2>
				<p>{user.bio}</p>
			</div>
			{/*Show edit profile link if user is correct*/}
			{isCorrectUser ? 
				<Link className="btn btn-outline-warning align-self-center edit-profile-button" 
				 to={url}
				 >Edit Profile</Link> : <div style={{width: "100px"}}></div>
			}
		</div>
	)
};

export default UserProfileHeader;
