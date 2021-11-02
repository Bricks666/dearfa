import React from "react";
import { Message } from "./Message/Message";

import MessagesStyle from "./Messages.module.css";

const Messages = ({ className, messages, authId }) => {
	return (
		<section
			className={`${MessagesStyle.messages} ${className}`}
			aria-label={"чат с кем-то"}
		>
			{messages.map((message) => {
				return (
					<Message
						className={authId === message.senderId && MessagesStyle.myMessage}
						author={message.senderName}
						key={message.id}
					>
						{message.body}
					</Message>
				);
			})}
		</section>
	);
};

export { Messages };
