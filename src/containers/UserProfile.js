import React from "react";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import EditProfileModal from "../components/EditProfileModal";
import { fetchOneUser } from "../store/actions/users";
import UserProfileHeader from "../components/UserProfileHeader";

class UserProfile extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			user: {},
			edit: false
		}
	}

	static defaultProps = {
		foundUser: {profileImageUrl:"", username:"", bio:""}
	}

	async popUser(){
		// API call to get user data from id in URL
		await this.props.fetchOneUser(this.props.match.params.id);
		// Add found user to state
		this.setState({user: this.props.foundUser});
	}

	componentDidMount(){
		// Call async populate user
		this.popUser();
	};

	render(){
		const id = this.props.match.params.id;
		const isCorrectUser = (this.props.currentUser.user.id === id);

		return (
			<div className="row">
				<div className="col-12 col-md-10">
					<UserProfileHeader isCorrectUser={isCorrectUser} user={this.state.user} url={`${id}/edit/`}/>
					<MessageList fromUser="true" user={id} />
				</div>
				<div className="col-12 col-md-2">
					<div className="adspace white-border"></div>
				</div>
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
