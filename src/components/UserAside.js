import React from "react";
import Icon from "../images/Icon";

const UserAside = ({profileImageUrl, username}) => (
	<div className="col-12 col-md-2 mb-3">
		<div className="card useraside-card">
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
			</div>
		</div>
	</div>
);

export default UserAside;