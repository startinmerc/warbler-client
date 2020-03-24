import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { postNewMessage } from "../store/actions/messages";

function MessageFormModal({errors, postNewMessage}) {
	const [message, updateMessage] = React.useState("");
	let history = useHistory();

	function handleSubmit(e){
		// Stop page refresh
		e.preventDefault();
		// Send API call through Redux
		postNewMessage(message);
		// Clear message
		updateMessage("");
		// Redirect to homepage
		history.push("/");
	}

	function handleClick(e){
		// Stop event propagation
		e.stopPropagation();
		// Redirect to homepage (hide form)
		history.push("/");
	}

		return(
			<div className="modal-form__container">
				<div className="modal-form__background" onClick={handleClick}></div>
				<form onSubmit={handleSubmit} className="white-border rounded p-3 bg-dark w-100 w-md-50 mx-auto mt-5">

					{/* Show any errors */}
					{errors.message && (
						<div className="alert alert-danger">
							{errors.message}
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
							value={message}
							id="message"
							name="message"
							onChange={e => updateMessage(e.target.value)}
						/>
						<small className="form-text text-muted">
							{message.length}/160
						</small>
					</div>
					<button type="submit" className="btn btn-outline-success btn-block" disabled={message.length < 1 ? "disabled" : null}>
						Submit Message
					</button>
				</form>
			</div>
		)
}

function mapStateToProps(state){
	return {
		errors: state.errors
	};
}

export default connect(mapStateToProps, { postNewMessage })(MessageFormModal);
