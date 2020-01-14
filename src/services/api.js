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

export function apiCall(method, path, data){
	return new Promise((resolve, reject) => {
		return axios[method](path,data)
			.then(res => {
				return resolve(res.data);
			})
			.catch(err => {
				return reject(err.response.data.error);
			});
	});
}
