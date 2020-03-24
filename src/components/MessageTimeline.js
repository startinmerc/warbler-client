import React from "react";
import MessageList from "../containers/MessageList";
import UserCard from "./UserCard";
import MessageFormModal from "../containers/MessageFormModal";

const MessageTimeline = props => {
	const [newForm, setNewForm] = React.useState(false);

	React.useEffect(()=>{
		if(props.newForm){
			setNewForm(props.newForm)
		}
	}, [props.newForm]);

	return (
		<div className="row">
			<UserCard profileImageUrl={props.profileImageUrl} username={props.username} userID={props.userID} userBio={props.userBio} showForm={setNewForm}/>
			<MessageList />
			<div className="col-12 col-md-2 mt-3 mt-md-0">
				<div className="adspace white-border"/>
			</div>
			{newForm && <MessageFormModal showForm={setNewForm}/>}
		</div>
	);
};

export default MessageTimeline;