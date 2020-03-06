import React from "react";
import Icon from "../images/Icon";
import { Link } from "react-router-dom";

const UserCard = ({profileImageUrl, username, userID}) => (
	<div className="col-12 col-md-2 mb-3">
		<div className="card user-card">
		{/* Show profile image, icon as fallback */}
		{profileImageUrl ? (
			<img src={profileImageUrl} 
				alt={username} className="d-none d-md-block card-img-top p-1"
			/>
		) : (
			<div className="d-none d-md-block card-img-top p-1">
				<Icon size="100%" color="var(--white)"/>
			</div>
		)}
			
			<div className="card-body text-center">
				<h5>@{username}</h5>
			<Link className="btn btn-outline-success" to={`/users/${userID}/messages/new`}>
				New Message
			</Link>
			</div>
		</div>
	</div>
);

export default UserCard;