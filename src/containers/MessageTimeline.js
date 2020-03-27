import React from "react";
import MessageList from "./MessageList";
import UserCard from "../components/UserCard";
import MessageFormModal from "../components/MessageFormModal";
import Adspace from "../components/Adspace";

const MessageTimeline = props => {
	const [newForm, setNewForm] = React.useState(false);

	React.useEffect(()=>{
		if(props.newForm){
			setNewForm(props.newForm)
		}
	}, [props.newForm]);

	return (
		<div className="row">
			<UserCard profileImageUrl={props.profileImageUrl}
			 username={props.username}
			 userID={props.userID}
			 userBio={props.userBio}
			 showForm={setNewForm}/>
			<MessageList />
			<Adspace />
			{newForm && <MessageFormModal showForm={setNewForm}/>}
		</div>
	);
};

export default MessageTimeline;
