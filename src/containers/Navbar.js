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
			<nav className="navbar navbar-dark navbar-expand-md bg-dark">
				<div className="navbar-brand">
					<Icon size="100px" classes="icon--navbar"/> 
					<Link to="/">
						<h1 className="d-inline-block mb-0">Warbler</h1>
					</Link>
				</div>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					{/*Only show messages, user card if logged in*/}
					{this.props.currentUser.isAuthenticated ? (
					<ul className="navbar-nav ml-auto">
						<li className="nav-item mr-0 mr-md-3 my-1 my-md-auto text-white text-center text-md-left">
							Logged in as @{this.props.currentUser.user.username}
						</li>
						<li className="nav-item mr-0 mr-md-3 my-1 my-md-0">
							<Link className="btn btn-outline-success" to={`/users/${this.props.currentUser.user.id}/messages/new`}>
								New Message
							</Link>
						</li>
						<li className="nav-item my-1 my-md-0">
							<button className="btn btn-outline-secondary" onClick={this.logOut}>
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
