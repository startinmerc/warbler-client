import React from "react";
import Icon from "../images/Icon";
import { Link } from "react-router-dom";

const UserCard = ({profileImageUrl, username, userID, userBio, showForm}) => (
	<div className="col-12 col-sm-3 col-md-2 mb-3">
		<div className="card user-card white-border">
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
			
			<div className="card-body text-center p-1 p-lg-3">
				<h5><Link to={`/users/${userID}`}>@{username}</Link></h5>
				<p>{userBio}</p>
			<Link className="btn btn-outline-success px-md-1 w-100 w-md-auto" to={`/new`}>
				New Message
			</Link>
			</div>
		</div>
	</div>
);

export default UserCard;