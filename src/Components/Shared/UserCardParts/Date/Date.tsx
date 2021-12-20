import React, { FC } from "react";
import { IDateComponent } from "../../../../Types/Components";

import { parseDate } from "./ParseDate";

export const Date: FC<IDateComponent> = ({ date, className, children }) => {
	return (
		<time className={className || ""} dateTime={date}>
			{children} {parseDate(date)}
		</time>
	);
};
