import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Loader from "./Loader";
import { fetchOneUser, editUser } from "../store/actions/users";

class EditProfileModular extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			profileImageUrl: "",
			bio: "",
			isLoading: false
		};
	};

	async popUser(){
		// API to get user data from id in URL
		await this.props.fetchOneUser(this.props.location.pathname.split("/")[2]);
		// Destructure user prop
		const { email,username,password,profileImageUrl,bio,_id } = this.props.foundUser;
		// Set as state
		this.setState({
			username,
			profileImageUrl,
			bio,
			_id 
		});
	};

	componentDidMount(){
		// Call async populate user
		this.popUser();
	}

	// Update state on form input change
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// Handle form submit
	handleSubmit = (e) => {
		// Prevent page refresh
		e.preventDefault();
		// Show loader
		this.setState({
			isLoading: true
		});
		// Dispatch API call via Redux
		this.props.editUser(
			this.state._id,
			{
				username: this.state.username,
				profileImageUrl: this.state.profileImageUrl,
				bio: this.state.bio
			}
			).then(()=>{
			// Hide loader
			this.setState({
				isLoading: false
			});
			// Redirect to homepage
			this.props.history.push("/");
		// Catch errors
		}).catch(()=>{
			return;
		});
	};

	handleClick = (e) => {
		// Stop event propagation
		e.stopPropagation();
		// Redirect to homepage (hide form)
		this.props.history.push("/");
	}

	render(){
		// Deconstruct input fields from state
		const { email, username, password, profileImageUrl, bio } = this.state;
		// Deconstruct props, including redux state
		const { errors, removeError } = this.props;
		
		// Clear errors
		this.props.history.listen(()=>{
			removeError();
		});

		return(
			<div className="modal-form__container">
				<div className="modal-form__background" onClick={this.handleClick}></div>
				<form className="modal-form rounded p-3 bg-dark w-100 w-md-50 mx-auto mt-5" onSubmit={this.handleSubmit}>
					<h2 className="mb-3">Edit Profile</h2>
					{/* Show any errors */}
					{errors.message && 
						<div className="alert alert-danger">
							{errors.message}
						</div>
					}

					<div className="form-group row">
						<label htmlFor="username" className="col-12 col-sm-2 col-form-label text-center text-md-right pr-0">Username:</label>
						<div className="col-12 col-sm-10 input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">@</div>
							</div>
							<input className="form-control" id="username" name="username"
							 onChange={this.handleChange} value={username} type="text"
							 />
						</div>
					</div>

					<div className="form-group row">
						<label htmlFor="profileImageUrl" className="col-sm-2 col-form-label text-right pr-0">Image URL:</label>
						<div className="col-sm-10">
							<input className="form-control" id="profileImageUrl" name="profileImageUrl"
							 onChange={this.handleChange} value={profileImageUrl} type="text"
							 />
						</div>
					</div>

					<div className="form-group row">
						<label htmlFor="bio" className="col-sm-2 col-form-label text-right pr-0">Bio:</label>
						<div className="col-sm-10">
							<textarea className="form-control" id="bio" name="bio"
							 onChange={this.handleChange} value={bio} type="text"
							 maxLength="160"
							 />
						</div>
						<small className="form-text text-muted">
							{bio.length}/160
						</small>
					</div>
					<button type="submit" className="btn btn-outline-success btn-block btn-lg mt-3">
						Save Changes
					</button>
				</form>
				<Loader isLoading={this.state.isLoading} text={"Logging In"} />
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		foundUser: state.users.foundUser
	};
};

// export default connect(mapStateToProps, { fetchOneUser, editUser })(EditProfileModular);

export default compose(
  withRouter,
  connect(mapStateToProps, { fetchOneUser, editUser})
)(EditProfileModular);