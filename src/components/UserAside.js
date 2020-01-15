import React from "react";
import DefaultUserImg from "../images/icon.svg";

const UserAside = ({profileImageUrl, username}) => (
	<div className="col-2">
		<div className="card useraside-card">
			<img src={profileImageUrl || DefaultUserImg} 
				alt={username} className="card-img-top"
			/>
			<div className="card-body">
				<h5>@{username}</h5>
			</div>
		</div>
	</div>
);

export default UserAside;