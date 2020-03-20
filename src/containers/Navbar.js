import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Icon from "../images/Icon";
import { logOut } from "../store/actions/auth";

function Navbar(props) {

	const history = useHistory();
	const { user, isAuthenticated } = props.currentUser;
	
	function logOut(e) {
		e.preventDefault();
		props.logOut();
		history.push("/");
	};

	return (
		<nav className="navbar navbar-dark navbar-expand-md mb-3">
			<div className="navbar-brand">
				<Icon size="100px" classes="icon--navbar"/> 
				<Link to="/">
					<h1 className="d-inline-block mb-0 navbar-brand__header">Warbler</h1>
				</Link>
			</div>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
				{/*Only show messages, user card if logged in*/}
				{isAuthenticated ? (
					<><li className="nav-item mr-0 mr-md-3 my-1 my-md-auto text-white text-center text-md-left">
						Logged in as <Link to={`/users/${user.id}`}>@{user.username}</Link>
					</li>
					<li className="nav-item mr-0 mr-md-3 my-1 my-md-0">
						<Link className="btn btn-outline-success" to={"/new"}>
							New Message
						</Link>
					</li>
					<li className="nav-item my-1 my-md-0">
						<Link to={"/"} className="btn btn-outline-secondary" onClick={logOut}>
							Log Out
						</Link>
					</li></>
				) : (
					<><li className="nav-item mr-0 mr-md-3 my-1 my-md-0">
						<Link to="/signup" className="btn btn-outline-success">Sign up</Link>
					</li>
					<li className="nav-item my-1 my-md-0">
						<Link to="/signin" className="btn btn-outline-primary">Sign in</Link>
					</li></>
				)}
				</ul>
			</div>
		</nav>
	);
};

function mapStateToProps(state){
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStateToProps,{logOut})(Navbar);
