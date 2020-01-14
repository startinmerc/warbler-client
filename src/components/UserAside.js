import React from "react";
import DefaultUserImg from "../images/icon.svg";

const UserAside = ({profileImageUrl, username}) => (
	<aside className="col-2">
		<div className="panel panel-default">
			<div className="panel-body">
				<img src={profileImageUrl || DefaultUserImg} 
					alt={username} className="img-thumbnail"
					style={{width:"200px", height:"200px"}}
				/>
				<p>{username}</p>
			</div>
		</div>
	</aside>
);

export default UserAside;