import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Icon from "../images/Icon";
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
						<Icon color="var(--color1)"/>
					</Link>
					{/*Only show messages, user card if logged in*/}
					{this.props.currentUser.isAuthenticated ? (
						<ul className="nav navbar-nav navbar-right d-flex align-items-center">
							<li>
								<Link className="btn btn-success" to={`/users/${this.props.currentUser.user.id}/messages/new`}>
									New Message
								</Link>
							</li>
							<li>
								<button className="btn btn-secondary" onClick={this.logOut}>
									Log Out
								</button>
							</li>
						</ul>
					{/*Otherwise show default landing page*/}
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
