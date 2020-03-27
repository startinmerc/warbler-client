import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage, editMessage, fetchMessages } from "../store/actions/messages";

class MessageForm extends Component {

	constructor(props){
		super(props);
		this.state = {
			message: ""
		};
	}

	async getMsgPop(){
		// API get all messages
		await this.props.fetchMessages();
		// Find message in messages
		const foundMessage = this.props.messages.find(
			// ID extracted from pathname
			message => message._id === this.props.match.params.message_id);
		// Set found message in state
		this.setState({message: foundMessage.text});
	}

	componentDidMount(){
		// If edit form
		if(this.props.edit){
			// Call async above
			this.getMsgPop();
		}
	}

	handleSubmit = e => {
		// Stop page refresh
		e.preventDefault();
		// If Edit form
		if(this.props.edit){
			// Call editMessage
			this.props.editMessage(
				// Extract user_id from pathname
				this.props.location.pathname.split("/")[2],
				// Extract message_id from pathname
				this.props.location.pathname.split("/")[4],
				// Pass edited message
				this.state.message
			);
		} else {
			// Send API call through Redux
			this.props.postNewMessage(this.state.message);
		}
		// Clear message
		this.setState({message:""});
		// Redirect to homepage
		this.props.history.push("/");
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit} className="col-8 mx-auto">

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
		)
	}
}

function mapStateToProps(state){
	return {
		errors: state.errors,
		messages: state.messages
	};
}

export default connect(mapStateToProps, { postNewMessage, editMessage, fetchMessages })(MessageForm);
