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
						className={`${MessagesStyle.message} ${
							authId === message.senderId && MessagesStyle.myMessage
						}`}
						isViewed={message.viewed}
						author={message.senderName}
						dateTime={message.addedAt}
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
