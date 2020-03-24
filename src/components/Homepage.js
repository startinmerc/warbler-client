import React from "react";
import { Link } from "react-router-dom";
import Icon from "../images/Icon";
import MessageTimeline from "./MessageTimeline";
import LandingBackground from "../images/LandingBackground";

const Homepage = ({ currentUser, newForm }) => {
	// Render default landing page if not logged in, else MessageTimeline
	if(!currentUser.isAuthenticated){
		return (
			<>
			<LandingBackground stroke="var(--pink)"/>
			<div className="home-hero d-flex flex-column justify-content-around align-items-center">
				<div className="hero-title text-center">
					<Icon size="80%" classes="icon--hero" triangle/>
					<h4>Welcome to</h4>
					<h1>Warbler</h1>
				</div>
				<div className="container d-flex flex-column align-items-center mt-5">
					<p>New around here?</p>
					<Link to="/signup" className="btn btn-success">
						Sign up!
					</Link>
				</div>
			</div>
			</>
		);
	} else {
		return (
			<MessageTimeline 
				profileImageUrl={currentUser.user.profileImageUrl}
				username={currentUser.user.username}
				userID={currentUser.user.id}
				userBio={currentUser.user.bio}
				newForm={newForm}
				/>
		);
	}
};

export default Homepage;