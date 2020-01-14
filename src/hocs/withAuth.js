// handles validation before component is seen
import React, {Component} from "react";
import { connect } from "react-redux";

export default function withAuth(ComponentToBeRendered){
	class Authenticate extends Component {
		// checks when loaded if state.currentUser.isAuthenticated
		componentWillMount(){
			if(!this.props.isAuthenticated){
				this.props.history.push("/signin");
			}
		}
		// and after update
		componentWillUpdate(){
			if(!this.props.isAuthenticated){
				this.props.history.push("/signin");
			}
		}
		render(){
			// render component with its relevant props if sucessful
			return <ComponentToBeRendered {...this.props} />
		}
	}

	function mapStateToProps(state){
		return {
			isAuthenticated: state.currentUser.isAuthenticated
		}
	}

	return connect(mapStateToProps)(Authenticate);
}

