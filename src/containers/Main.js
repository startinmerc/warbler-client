import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import Authform from "../components/Authform";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";

const Main = props => {
	const { authUser, errors, removeError, currentUser } = props;
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={
					props => <Homepage currentUser={currentUser} {...props}/>
				} />
				<Route exact path="/signin" render={
					props => <Authform
						removeError={removeError}
						errors={errors}
						onAuth={authUser}
						buttonText="Sign in"
						heading="Welcome Back"
						{...props}
					/>
				} />
				<Route exact path="/signup" render={
					props => <Authform
						signUp
						removeError={removeError}
						errors={errors}
						onAuth={authUser}
						buttonText="Sign me up!"
						heading="Join Warbler"
						{...props}
					/>
				} />
				<Route path="/users/:id/messages/new" component={withAuth(MessageForm)}/>
			</Switch>
		</div>
	)
}

function mapStateToProps(state){
	return {
		currentUser: state.currentUser,
		errors: state.errors
	}
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
