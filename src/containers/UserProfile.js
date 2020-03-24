import React from "react";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import { Link } from "react-router-dom";
import EditProfileModal from "../components/EditProfileModal";
import { fetchOneUser } from "../store/actions/users";

class UserProfile extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			user: {},
			edit: false
		}
	}

	async popUser(){
		// API call to get user data from id in URL
		await this.props.fetchOneUser(this.props.location.pathname.split("/")[2]);
		// Add found user to state
		this.setState({user: this.props.foundUser});
	}

	componentDidMount(){
		// Call async populate user
		this.popUser();
		// If edit prop, set state of edit to true
		if(this.props.edit){
			this.setState({
				edit: true
			});
		};
	};
	
	render(){
		return (
			<div className="row">
				<div className="col-12 col-md-10">
					<div className="text-center">
						<h2>@{this.state.user.username}</h2>
						<p>{this.state.user.bio}</p>
					{/*Show edit profile link if user is correct*/}
						{this.props.currentUser.user.id === this.state.user._id && 
							<Link className="btn btn-outline-warning" to={`${this.props.location.pathname}/edit`}>button</Link>
						}
					</div>
					<MessageList fromUser="true" user={this.state.user._id} />
				</div>
				<div className="col-12 col-md-2">
					<div className="adspace"></div>
				</div>
				{/*Mount EditProfileModal if required, passing props*/}
				{this.state.edit && <EditProfileModal
				 showForm={this.handleClick}
				 removeError={this.props.removeError}
				 errors={this.props.errors}
				 onAuth={this.props.authUser}
				 />}
			</div>
		)
	}
};

function mapStateToProps(state){
	return {
		foundUser: state.users.foundUser
	};
};

export default connect(mapStateToProps, { fetchOneUser })(UserProfile);
