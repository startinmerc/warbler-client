import React from "react";
import MessageTimeline from "./MessageTimeline";
import LandingPage from "./LandingPage";

const Homepage = ({ currentUser, newForm }) => {
	// Render default landing page if not logged in, else MessageTimeline
	if(!currentUser.isAuthenticated){
		return (
			<LandingPage />
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
