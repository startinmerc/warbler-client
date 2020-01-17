import React from "react";
import Icon from "../images/Icon";

const UserAside = ({profileImageUrl, username}) => (
	<div className="col-2">
		<div className="card useraside-card">
		{profileImageUrl ? (
			<img src={profileImageUrl} 
				alt={username} className="card-img-top"
			/>
		) : (
			<div className="card-img-top">
				<Icon size="100%"/>
			</div>
		)}
			
			<div className="card-body">
				<h5>@{username}</h5>
			</div>
		</div>
	</div>
);

export default UserAside;