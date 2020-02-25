import React from "react";
import { connect } from "react-redux";
import { postNewMessage, editMessage, fetchOneMessage } from "../store/actions/messages";

class MessageForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			message: ""
		};
	}

	async getMsgPop(){
		await this.props.fetchOneMessage(
			this.props.location.pathname.split("/")[2],
			this.props.location.pathname.split("/")[4]
		);
		debugger
		this.setState({message: this.props.foundMessage.text});
	}

	componentDidMount(){
		if(this.props.edit){
			this.getMsgPop();
		}
	}

	// Handle form submission if new message
	handleNewMessage = e => {
		// Stop page refresh
		e.preventDefault();
		// Send API call through Redux
		this.props.postNewMessage(this.state.message);
		// Clear message
		this.setState({message:""});
		// Redirect to homepage
		this.props.history.push("/");
	}

	handleEditMessage = e => {
		// Stop page refresh
		e.preventDefault();
		// Send API call through Redux
		this.props.editMessage(
			this.props.location.pathname.split("/")[2],
			this.props.location.pathname.split("/")[4],
			this.state.message
		);
		// Clear message
		this.setState({message:""});
		// Redirect to homepage
		this.props.history.push("/");
	}

	render(){
		return(
			<form onSubmit={this.handleSubmit} className="new-message-form">

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
					<input 
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
				<button type="submit" className="btn btn-success btn-block">
					Submit Message
				</button>
			</form>
		)
	}
}

function mapStateToProps(state){
	return {
		errors: state.errors,
		foundMessage: state.messages.foundMessage
	};
}

export default connect(mapStateToProps, { postNewMessage, fetchOneMessage, editMessage })(MessageForm);
