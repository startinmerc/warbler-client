import { LOAD_ONE_USER, LOAD_ALL_USERS } from "../actionTypes";

const users = (state=[], action) => {
	debugger
	switch(action.type){
		case LOAD_ONE_USER:
			return [...action.user];
		case LOAD_ALL_USERS:
			return [...action.users];
		default:
			return state;
	};
};

export default users;
