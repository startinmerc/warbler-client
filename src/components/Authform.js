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

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const authType = this.props.signUp ? "signup" : "login";
		this.props.onAuth(authType, this.state).then(()=>{
			console.log("logged in!");
		}).catch(()=>{
			console.log("error");
		});
	};

	render(){
		const { email, username, password, profileImageUrl } = this.state;
		const { heading, buttonText, signUp } = this.props;
		return(
			<div>
				<div className="row justify-content-center text-center">
					<div className="col-6">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							<label htmlFor="email">Email:</label>
							<input className="form-control" id="email" name="email"
							 onChange={this.handleChange} value={email} type="email"
							 />
							<label htmlFor="password">Password:</label>
							<input className="form-control" id="password" name="password"
							 onChange={this.handleChange} type="password"
							 />
							{signUp && (
								<div>
									<label htmlFor="username">Username:</label>
									<input className="form-control" id="username" name="username"
									 onChange={this.handleChange} value={username} type="text"
									 /><label htmlFor="profileImageUrl">Image URL:</label>
									<input className="form-control" id="profileImageUrl" name="profileImageUrl"
									 onChange={this.handleChange} value={profileImageUrl} type="text"
									 />
								</div>
								)}
							<button type="submit" className="btn btn-primary btn-block btn-lg">
								{buttonText}
							</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Authform;
