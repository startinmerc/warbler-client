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
		const { removeMessage, currentUser, fromUser } = this.props;
		let messages = this.props.messages;
		// Filter messages if user_id supplied
		if(fromUser){
			messages = this.props.messages.filter(message => (
				message.user._id === this.props.user
			))
		};

		// Map all message components, including bound functions
		let messageList = messages.map((m)=>(
			<MessageItem
				key={m._id}
				createdAt={m.createdAt}
				updatedAt={m.updatedAt}
				text={m.text}
				username={m.user.username}
				profileImageUrl={m.user.profileImageUrl}
				removeMessage={removeMessage.bind(this, m.user._id, m._id)}
				isCorrectUser={currentUser === m.user._id}
				userId={m.user._id}
				msgId={m._id}
			/>
			));
		return (
			<div className={fromUser ? "mt-0 px-0" : "col-12 col-sm-9 col-md-8 px-md-0"}>
				<ul className="list-group" id="messages">
					{messageList}
				</ul>
			</div>
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