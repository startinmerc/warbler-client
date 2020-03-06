import React, { Component } from "react";

class Authform extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: "",
			profileImageUrl: ""
		};
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
		// Find type of submit to send
		const authType = this.props.signUp ? "signup" : "signin";
		// Dispatch API call via Redux
		this.props.onAuth(authType, this.state).then(()=>{
			// Redirect to homepage
			this.props.history.push("/");
		// Catch errors
		}).catch(()=>{
			return;
		});
	};

	render(){
		// Deconstruct input fields from state
		const { email, username, password, profileImageUrl } = this.state;
		// Deconstruct props, including redux state
		const { heading, buttonText, signUp, errors, history, removeError } = this.props;
		
		// Clear errors
		history.listen(()=>{
			removeError();
		});

		return(
			<div className="row justify-content-center text-center">
				<div className="col-12 col-md-6">
					<form onSubmit={this.handleSubmit}>
						<h2>{heading}</h2>
						{/* Show any errors */}
						{errors.message && 
							<div className="alert alert-danger">
								{errors.message}
							</div>
						}
						<label htmlFor="email">Email:</label>
						<input className="form-control" id="email" name="email"
						 onChange={this.handleChange} value={email} type="email"
						 />
						<label htmlFor="password">Password:</label>
						<input className="form-control" id="password" name="password"
						 onChange={this.handleChange} type="password" value={password}
						 />
						{/* Show extra fields for signup form */}
						{signUp && (
							<div>
								<label htmlFor="username">Username:</label>
								<input className="form-control" id="username" name="username"
								 onChange={this.handleChange} value={username} type="text"
								 />
								<label htmlFor="profileImageUrl">Image URL:</label>
								<input className="form-control" id="profileImageUrl" name="profileImageUrl"
								 onChange={this.handleChange} value={profileImageUrl} type="text"
								 />
							</div>
							)}
						<button type="submit" className="btn btn-outline-success btn-block btn-lg mt-3">
							{buttonText}
						</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Authform;
