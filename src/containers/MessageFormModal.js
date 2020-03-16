import React, { Component } from "react";
import { connect, useHistory } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageFormModal extends Component {

	constructor(props){
		super(props);
		this.state = {
			message: ""
		};
	}

	handleSubmit = e => {
		// Stop page refresh
		e.preventDefault();
		// Send API call through Redux
		this.props.postNewMessage(this.state.message);
		// Clear message
		this.setState({message:""});
		// Redirect to homepage
		// this.props.history.push("/");
		this.props.showForm();
	}

	handleClick = e => {
		e.stopPropagation();
		this.props.showForm();
	}

	render(){
		return(
			<div className="message-form-modal__container">
				<div className="message-form-modal__background" onClick={this.handleClick}></div>
				<form onSubmit={this.handleSubmit} className="message-form-modal rounded p-3 bg-dark w-50 mx-auto mt-5">

					{/* Show any errors */}
					{this.props.errors.message && (
						<div className="alert alert-danger">
							{this.props.errors.message}
						</div>
					)}
					
					<div className="form-group">
						<label htmlFor="message">
							New Message:
						</label>
						<textarea 
							autoFocus
							maxLength="160"
							type="text" 
							className="form-control"
							value={this.state.message}
							id="message"
							name="message"
							onChange={e => this.setState({message: e.target.value})}
						/>
						<small className="form-text text-muted">
							{this.state.message.length}/160
						</small>
					</div>
					<button type="submit" className="btn btn-outline-success btn-block" disabled={this.state.message.length < 1 ? "disabled" : null}>
						Submit Message
					</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		errors: state.errors
	};
}

export default connect(mapStateToProps, { postNewMessage })(MessageFormModal);
