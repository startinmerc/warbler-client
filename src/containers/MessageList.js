import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages, removeMessage } from "../store/actions/messages";
import MessageItem from "../components/MessageItem";

class MessageList extends Component {

	// Only fetch messages if mounted
	componentDidMount(){
		this.props.fetchMessages();
	}

	render() {
		// Extract variables from props
		const { messages, removeMessage, currentUser } = this.props;

		// Map all message components, including bound functions
		let messageList = messages.map((m)=>(
			<MessageItem
				key={m._id}
				date={m.createdAt}
				text={m.text}
				username={m.user.username}
				profileImageUrl={m.user.profileImageUrl}
				removeMessage={removeMessage.bind(this, m.user._id, m._id)}
				isCorrectUser={currentUser === m.user._id}
			/>
			));
		return (
			<ul className="list-group col-12 col-md-8 pl-md-0" id="messages">
				{messageList}
			</ul>
		);
	}
}

function mapStateToProps(state){
	return {
		messages: state.messages,
		currentUser: state.currentUser.user.id
	};
}

export default connect(mapStateToProps, { fetchMessages, removeMessage })(MessageList);