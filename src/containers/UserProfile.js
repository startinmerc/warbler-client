import React from "react";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import { Link } from "react-router-dom";
import EditProfileModal from "../components/EditProfileModal";
import Icon from "../images/Icon";
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
					<div className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-between rounded white-border p-3">
						{/* profile image or backup icon */}
						{this.state.user.profileImageUrl ? (
							<img src={this.state.user.profileImageUrl}
								alt={this.state.user.username}
								className="message-item__image img-fluid"
							/>
							) : (
								<Icon classes="message-item__image" size="100px" color="var(--white)"/>
							)
						}
						<div className="text-center">
							<h2>@{this.state.user.username}</h2>
							<p>{this.state.user.bio}</p>
						</div>
						{/*Show edit profile link if user is correct*/}
						{this.props.currentUser.user.id === this.state.user._id && 
							<Link className="btn btn-outline-warning align-self-center edit-profile-button" 
							 to={`${this.props.location.pathname}/edit`}
							 >Edit Profile</Link>
						}
					</div>
					<MessageList fromUser="true" user={this.state.user._id} />
				</div>
				<div className="col-12 col-md-2">
					<div className="adspace white-border"></div>
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
