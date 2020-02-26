import React from "react";
import Icon from "../images/Icon";
import { Link } from "react-router-dom";

const UserAside = ({profileImageUrl, username, userID}) => (
	<div className="col-12 col-md-2 mb-3">
		<div className="card useraside-card">
		{/* Show profile image, icon as fallback */}
		{profileImageUrl ? (
			<img src={profileImageUrl} 
				alt={username} className="d-none d-md-block card-img-top"
			/>
		) : (
			<div className="d-none d-md-block card-img-top">
				<Icon size="100%"/>
			</div>
		)}
			
			<div className="card-body">
				<h5>@{username}</h5>
			<Link className="btn btn-success" to={`/users/${userID}/messages/new`}>
				New Message
			</Link>
			</div>
		</div>
	</div>
);

export default UserAside;