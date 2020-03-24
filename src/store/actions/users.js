import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_ALL_USERS, LOAD_ONE_USER } from "../actionTypes";

export const loadAllUsers = users => ({
	type: LOAD_ALL_USERS,
	users
});

export const loadOneUser = user => ({
	type: LOAD_ONE_USER,
	user
});

export const fetchAllUsers = () => {
	return dispatch => {
		return apiCall("get", "/api/users")
			.then(res => dispatch(loadAllUsers(res)))
			.catch(err => dispatch(addError(err.message)));
	};
};

export const fetchOneUser = (user_id) => {
	return dispatch => {
		return apiCall("get", `/api/users/${user_id}`)
			.then(res => dispatch(loadOneUser(res)))
			.catch(err => dispatch(addError(err.message)));
	};
};

export const editUser = (user_id, userData) => {
	return dispatch => {
		return apiCall("put", `/api/users/${user_id}`, userData)
			.then(res => {})
			.catch(err => dispatch(addError(err.message)));
	};
};