import classNames from "classnames";
import React, { FC } from "react";
import { useAuth, useCompanion, useMessages } from "../../../Hooks";
import { IMessagesComponent } from "../../../Types/Components";
import { Message } from "./Message/Message";

import MessagesStyle from "./Messages.module.css";

const Messages: FC<IMessagesComponent> = ({ className, dialogId }) => {
	const { userId: authId } = useAuth();
	const { messages } = useMessages(dialogId);
	const {
		companion: { name: companionName },
	} = useCompanion(dialogId);

	return (
		<section
			className={classNames(MessagesStyle.wrapper, className)}
			aria-label={`чат с ${companionName}`}
		>
			<div className={MessagesStyle.messages}>
				{messages.map((message) => {
					return (
						<Message
							className={classNames(MessagesStyle.message, {
								[MessagesStyle.myMessage]: authId === message.senderId,
							})}
							viewed={message.viewed}
							senderName={message.senderName}
							addedAt={message.addedAt}
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
