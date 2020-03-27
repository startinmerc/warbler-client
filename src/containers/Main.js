import React from "react";
import { Switch, Route, withRouter } from "react-router";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import Homepage from "../containers/Homepage";
import MessageForm from "../components/MessageForm";
import UserProfile from "../containers/UserProfile";
import EditProfileModal from "../components/EditProfileModal";
import Authform from "../components/Authform";

const Main = props => {
	const { authUser, errors, removeError, currentUser } = props;
	return (
		<main className="container mb-3">
			<Switch>
				<Route exact path="/" render={
					props => <Homepage currentUser={currentUser} {...props}/>
				} />

				<Route path="/signin" render={
					props => <Authform
						removeError={removeError}
						errors={errors}
						onAuth={authUser}
						buttonText="Sign In"
						heading="Welcome Back"
						{...props}
					/>
				} />
				<Route path="/signup" render={
					props => <Authform
						signUp
						removeError={removeError}
						errors={errors}
						onAuth={authUser}
						buttonText="Sign Up"
						heading="Join Warbler"
						{...props}
					/>
				} />
				
				<Route path="/new" component={withAuth(Homepage, {newForm:true,...props})} />
				<Route path="/users/:id/messages/:message_id/edit" component={
					withAuth(MessageForm, {edit:true})}/>
				<Route path="/users/:id/messages/new" component={withAuth(MessageForm)}/>
				<Route path="/users/:id/edit/" component={
					withAuth(EditProfileModal, {...props})}/>
				<Route path="/users/:id/" component={props => (
					<UserProfile currentUser={currentUser} {...props}/>
					)}/>
			</Switch>
		</main>
	)
}

function mapStateToProps(state){
	return {
		currentUser: state.currentUser,
		errors: state.errors
	}
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
