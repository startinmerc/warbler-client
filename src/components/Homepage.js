import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
	// Render default landing page if not logged in, else MessageTimeline
	if(!currentUser.isAuthenticated){
		return (
			<div className="home-hero d-flex flex-column justify-content-around align-items-center">
				<h1 className="text-center">Welcome to Warbler</h1>
				<div className="container d-flex flex-column align-items-center">
					<h4>New around here?</h4>
					<Link to="/signup" className="btn btn-primary">
						Sign up!
					</Link>
				</div>
			</div>	
		);
	} else {
		return (
			<MessageTimeline 
				profileImageUrl={currentUser.user.profileImageUrl}
				username={currentUser.user.username}
				/>
		);
	}
};

export default Homepage;