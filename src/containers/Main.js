import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import Authform from "../components/Authform";

const Main = props => {
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={
					props => <Homepage {...props}/>
				} />
				<Route exact path="/login" render={
					props => <Authform buttonText="Log in" heading="Welcome Back" {...props}/>
				} />
				<Route exact path="/signup" render={
					props => <Authform buttonText="Sign me up!" heading="Join Warbler" {...props}/>
				} />
			</Switch>
		</div>
	)
}

function mapStateToProps(state){
	return {
		currentUser: state.currentUser
	}
}

export default withRouter(connect(mapStateToProps, null)(Main));
