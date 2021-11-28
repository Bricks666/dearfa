import React from "react";

import { parseDate } from "./ParseDate";

export const Date = ({ date, className, children }) => {
	return (
		<time className={className || ""} dateTime={date}>
			{children} {parseDate(date)}
		</time>
	);
};
