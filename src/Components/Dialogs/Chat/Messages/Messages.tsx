import classNames from "classnames";
import React, { /* useEffect, */ useRef } from "react";
import { useAuth, useCompanion, useMessages } from "../../../../Hooks";
import { Message } from "./Message/Message";

import MessagesStyle from "./Messages.module.css";

const Messages = ({ className, dialogId }) => {
	const { userId: authId } = useAuth();
	const { messages } = useMessages(dialogId);
	const {
		companion: { name: companionName },
	} = useCompanion(dialogId);
	const parent = useRef();
	/* 	useEffect(() => {
		parent.current?.scrollTo({ top: parent.current.scrollHeight });
	}, []); */

	return (
		<section
			className={classNames(MessagesStyle.wrapper, className)}
			aria-label={`чат с ${companionName}`}
			ref={parent}
		>
			<div className={MessagesStyle.messages}>
				{messages.map((message) => {
					return (
						<Message
							className={classNames(MessagesStyle.message, {
								[MessagesStyle.myMessage]: authId === message.senderId,
							})}
							isViewed={message.viewed}
							author={message.senderName}
							dateTime={message.addedAt}
							key={message.id}
						>
							{message.body}
						</Message>
					);
				})}
			</div>
		</section>
	);
};

export { Messages };
