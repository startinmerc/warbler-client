import axios from "axios";

export function setTokenHeader(token){
	// if token exists
	if(token){
		// push token to header
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		// clear authorization
		delete axios.defaults.headers.common["Authorization"];
	}
}

// Create new Promise of API call as axios http request
// Expects METHOD, PATH, DATA (optional)
export function apiCall(method, path, data){
	return new Promise((resolve, reject) => {
		// Create axios request with supplied data
		return axios[method](path,data)
			.then(res => {
				// Then return resolved data
				return resolve(res.data);
			})
			// Catch errors
			.catch(err => {
				return reject(err.response.data.error);
			});
	});
}
