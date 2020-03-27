import React from "react";
import { Link } from "react-router-dom";
import LandingBackground from "../images/LandingBackground";
import Icon from "../images/Icon";

const LandingPage = () => (
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
)

export default LandingPage;
