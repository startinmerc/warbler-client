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
				<div className="col-12 col-md-8">
					<form onSubmit={this.handleSubmit}>
						<h2>{heading}</h2>
						{/* Show any errors */}
						{errors.message && 
							<div className="alert alert-danger">
								{errors.message}
							</div>
						}
						<div className="form-group row">
							<label htmlFor="email" className="col-sm-2 col-form-label text-right pr-0">Email:</label>
							<div className="col-sm-10">
								<input className="form-control" id="email" name="email"
								 onChange={this.handleChange} value={email} type="email" placeholder="your@email.com"
								 />
							</div>
						 </div>
							 <div className="form-group row">
							<label htmlFor="password" className="col-sm-2 col-form-label text-right pr-0">Password:</label>
							<div className="col-sm-10">
								<input className="form-control" id="password" name="password"
								 onChange={this.handleChange} type="password" value={password} placeholder="password"
								 />
							</div>
						 </div>
						{/* Show extra fields for signup form */}
						{signUp && (
							<>
							<div className="form-group row">
								<label htmlFor="username" className="col-sm-2 col-form-label text-right pr-0">Username:</label>
								<div className="col-sm-10 input-group">
									<div class="input-group-prepend">
										<div class="input-group-text">@</div>
									</div>
									<input className="form-control" id="username" name="username"
									 onChange={this.handleChange} value={username} type="text" placeholder="your-desired-username"
									 />
								</div>
							</div>
							<div className="form-group row d-none">
								<label htmlFor="profileImageUrl" className="col-sm-2 col-form-label text-right pr-0">Image URL:</label>
								<div className="col-sm-10">
									<input className="form-control" id="profileImageUrl" name="profileImageUrl"
									 onChange={this.handleChange} value={profileImageUrl} type="text" placeholder=""
									 />
								</div>
							</div>
							</>
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
