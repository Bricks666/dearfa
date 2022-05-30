import React, { FC } from "react";
import classNames from "classnames";
import { Date } from "@/components/Shared";
import { Message } from "@/models/messages";
import { StandardProps } from "@/interfaces/components";

import MessageStyle from "./Message.module.css";

interface MessageProps
	extends StandardProps,
		Omit<Message, "body" | "id" | "senderId"> {}

export const MessageCard: FC<MessageProps> = ({
	className,
	children,
	senderName,
	viewed,
	addedAt,
}) => {
	return (
		<article
			className={classNames(MessageStyle.message, className, {
				[MessageStyle.notViewed]: viewed === false,
			})}
		>
			<span className={MessageStyle.author}>{senderName}</span>
			<p className={MessageStyle.content}>{children}</p>
			<Date className={MessageStyle.dateTime} date={addedAt} />
		</article>
	);
};
