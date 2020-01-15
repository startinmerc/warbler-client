import React from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";

class MessageForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			message: ""
		};
	}

	handleNewMessage = e => {
		e.preventDefault();
		this.props.postNewMessage(this.state.message);
		this.setState({message:""});
		this.props.history.push("/");
	}

	render(){
		return(
			<form onSubmit={this.handleNewMessage} className="new-message-form">
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
		errors: state.errors
	};
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);
