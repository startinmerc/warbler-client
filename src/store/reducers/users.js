import { LOAD_ONE_USER, LOAD_ALL_USERS } from "../actionTypes";

const users = (state={}, action) => {
	switch(action.type){
		case LOAD_ONE_USER:
			return {...state, foundUser: action.user};
		case LOAD_ALL_USERS:
			return {...action.users};
		default:
			return state;
	};
};

export default users;
