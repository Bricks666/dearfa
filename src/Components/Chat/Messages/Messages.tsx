import classNames from "classnames";
import React, { FC } from "react";
import { useAuth, useCompanion, useMessages } from "../../../Hooks";
import { IOnlyClassComponent } from "../../../Types/Common";
import { Message } from "./Message/Message";

import MessagesStyle from "./Messages.module.css";

interface IMessages extends IOnlyClassComponent {
	dialogId: number;
}

const Messages: FC<IMessages> = ({ className, dialogId }) => {
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
