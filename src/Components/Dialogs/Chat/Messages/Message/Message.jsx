import React from "react";

import MessageStyle from "./Message.module.css";

export const Message = ({ className, children, author, photo }) => {
	return (
		<article className={`${className ?? ""}`}>
			{photo}
			<p className={MessageStyle.content}>
				<span className={MessageStyle.author}>{author}</span>
				{children}
			</p>
		</article>
	);
};
