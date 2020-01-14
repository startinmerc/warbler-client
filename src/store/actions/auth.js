import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function setAuthorizationToken(token){
	setTokenHeader(token);
}

export function logOut() {
	return dispatch => {
		localStorage.clear();
		// remove auth token from header
		setAuthorizationToken(false);
		// set current user to blank
		dispatch(setCurrentUser({}));
	};
}

export function authUser(type, userData){
	return dispatch => {
		// wrap our thunk in a promise so we can wait for the API call
		return new Promise((resolve, reject)=>{
			return apiCall("post", `/api/auth/${type}`, userData)
			.then(({token, ...user}) => {
					// set auth token
					localStorage.setItem("jwtToken",token);
					// set token in header
					setAuthorizationToken(token);
					// sends currentUser to Redux
					dispatch(setCurrentUser(user));
					// clear all errors
					dispatch(removeError());
					// indicate that the API call succeeded
					resolve(); 
				})
			.catch(err => {
				dispatch(addError(err.message));
				reject(); // indicate the API call failed
			});
		});
	}
}
