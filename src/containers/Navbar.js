import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Icon from "../images/icon.svg";
import { logOut } from "../store/actions/auth";

class Navbar extends Component {

	logOut = e => {
		e.preventDefault();
		this.props.logOut();
	};

	render(){
		return (
			<nav className="navbar navbar-expand">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src={Icon} alt="flaticon.com/authors/freepik"/>
						Warbler
					</Link>
					{this.props.currentUser.isAuthenticated ? (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>
									New Message
								</Link>
							</li>
							<li>
								<a onClick={this.logOut}>Log Out</a>
							</li>
						</ul>
						) : (
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to="/signup">Sign up</Link>
						</li>
						<li>
							<Link to="/signin">Sign in</Link>
						</li>
					</ul>
					)}
				</div>
			</nav>
		);
	}
};

function mapStateToProps(state){
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStateToProps,{logOut})(Navbar);
