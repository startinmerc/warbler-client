import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import Authform from "../components/Authform";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from "../containers/MessageForm";
import MessageList from "../containers/MessageList";

const Main = props => {
	const { authUser, errors, removeError, currentUser } = props;
	return (
		<div className="container mb-3">
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
				<Route exact path="/users/:id/messages/" render={
					props => <MessageList fromUser="true" {...props} />
				}/>

				<Route path="/users/:id/messages/new" component={withAuth(MessageForm)}/>
				<Route path="/users/:id/messages/:message_id/edit" component={
					withAuth(MessageForm, {edit:true})} 
				/>
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
