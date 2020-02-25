import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE, LOAD_ONE_MESSAGE } from "../actionTypes";

export const loadMessages = messages => ({
	type: LOAD_MESSAGES,
	messages
});

export const loadOneMessage = message => ({
	type: LOAD_ONE_MESSAGE,
	message
});

export const remove = id => ({
	type: REMOVE_MESSAGE,
	id
});

export const fetchMessages = () => {
	return dispatch => {
		// Send API call to get all messages
		return apiCall("get", "/api/messages")
			// Then send loadMessages action
			.then(res => dispatch(loadMessages(res)))
			// Catch errors
			.catch(err => dispatch(addError(err.message)));
	};
};

export const postNewMessage = text => (dispatch, getState) => {
	// Get currentUser from state
	let { currentUser } = getState();
	// Extract user id
	const id = currentUser.user.id;
	// Send API call to post new message
	return apiCall("post", `/api/users/${id}/messages`, { text })
		// Thenk continue
		.then(res => {})
		// Catch errors
		.catch(err => dispatch(addError(err.message)));
}

export const removeMessage = (user_id, message_id) => {
	return dispatch => {
		return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
			.then(() => dispatch(remove(message_id)))
			.catch(err => dispatch(addError(err.message)));
	};
};

export const editMessage = (user_id, message_id, text) => {
	return dispatch => {
		// Send API call with path & new message text
		return apiCall("put", `/api/users/${user_id}/messages/${message_id}`, { text })
			// Then continue
			.then(res => {})
			// Catch errors
			.catch(err => dispatch(addError(err.message)));
	};
};