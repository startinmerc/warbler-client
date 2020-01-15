import React from "react";
import { Link } from "react-router-dom";
import MessageTimeline from "./MessageTimeline";

const Homepage = ({ currentUser }) => {
	if(!currentUser.isAuthenticated){
		return (
			<div className="home-hero d-flex flex-column justify-content-around align-items-center">
				<h1>What's Happening?</h1>
				<div className="container d-flex flex-column align-items-center">
					<h4>New to Warbler?</h4>
					<Link to="/signup" className="btn btn-primary">
						Sign up here!
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