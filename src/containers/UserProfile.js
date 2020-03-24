import React from "react";
import { connect } from "react-redux";
import MessageList from "./MessageList";
import { fetchOneUser } from "../store/actions/users";

class UserProfile extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			user: {}
		}
	}

	async popUser(){
		await this.props.fetchOneUser(this.props.location.pathname.split("/")[2]);
		this.setState({user: this.props.foundUser});
	}

	componentDidMount(){
		this.popUser();
	}
	
	render(){
		return (
			<div className="row">
				<div className="col-12 col-md-10">
					<div className="text-center">
						<h2>@{this.state.user.username}</h2>
						<p>{this.state.user.bio}</p>
					</div>
					<MessageList fromUser="true" user={this.state.user._id} />
				</div>
				<div className="col-12 col-md-2">
					<div className="adspace"/>
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
