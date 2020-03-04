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
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<div className="container-fluid">
					<div className="navbar-brand">
						<Icon size="100px" classes="icon--navbar"/> 
						<Link to="/">
							<h1 className="d-inline-block mb-0">Warbler</h1>
						</Link>
					</div>
					{/*Only show messages, user card if logged in*/}
					{this.props.currentUser.isAuthenticated ? (
						<ul className="nav navbar-nav navbar-right d-flex align-items-center justify-content-end">
							<li className="nav__user">
								Logged in as @{this.props.currentUser.user.username}
							</li>
							<li>
								<Link className="btn btn-success d-none d-md-inline-block" to={`/users/${this.props.currentUser.user.id}/messages/new`}>
									New Message
								</Link>
							</li>
							<li>
								<button className="btn btn-secondary" onClick={this.logOut}>
									Log Out
								</button>
							</li>
						</ul>
					) : (
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to="/signup" className="btn btn-success">Sign up</Link>
						</li>
						<li>
							<Link to="/signin" className="btn btn-primary">Sign in</Link>
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
