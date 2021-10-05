import React from "react";

import { Message } from "./Message/Message";

export const RenderMessages = (messages, className) => {
	return messages.map((message) => {
		return (
			<Message className={className} key={message.id}>
				{message.content.text}
			</Message>
		);
	});
};
