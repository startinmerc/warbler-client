import React from "react";

const Loader = ({ isLoading, text }) => {
	if(isLoading){
		return (
			<div className="loader bg-dark p-5 rounded">
				{text}
				<span className="loader__dot">.</span>
				<span className="loader__dot">.</span>
				<span className="loader__dot">.</span>
			</div>
		)
	} else {
		return(null)
	}
};

export default Loader;
