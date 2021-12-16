import React, { FC } from "react";
import classNames from "classnames";
import { IOnlyClassComponent } from "../../../../../Types/Common";
import { IMessage } from "../../../../../Types/Redux";
import { Date } from "../../../../Shared";

import MessageStyle from "./Message.module.css";

interface IMessageCard
	extends IOnlyClassComponent,
		Omit<IMessage, "body" | "id" | "senderId"> {}

export const Message: FC<IMessageCard> = ({
	className,
	children,
	senderName,
	viewed,
	addedAt,
}) => {
	return (
		<article
			className={classNames(MessageStyle.message, className, {
				[MessageStyle.notViewed]: viewed == false,
			})}
		>
			<span className={MessageStyle.author}>{senderName}</span>
			<p className={MessageStyle.content}>{children}</p>
			<Date className={MessageStyle.dateTime} date={addedAt} />
		</article>
	);
};
