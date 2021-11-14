import React from "react";

import MessageStyle from "./Message.module.css";

export const Message = ({
	className,
	children,
	author,
	isViewed,
	dateTime,
}) => {
	console.log(dateTime);
	return (
		<article
			className={`${MessageStyle.message} ${
				isViewed ? "" : MessageStyle.notViewed
			} ${className ?? ""}`}
		>
			<span className={MessageStyle.author}>{author}</span>
			<p className={MessageStyle.content}>{children}</p>
			<time className={MessageStyle.dateTime} dateTime={dateTime}>
				{new Date(dateTime).toLocaleString()}
			</time>
		</article>
	);
};
