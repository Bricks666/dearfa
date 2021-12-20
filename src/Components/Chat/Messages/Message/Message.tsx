import React, { FC } from "react";
import classNames from "classnames";
import { Date } from "../../../Shared";
import { IMessageComponent } from "../../../../Types/Components";

import MessageStyle from "./Message.module.css";

export const Message: FC<IMessageComponent> = ({
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
