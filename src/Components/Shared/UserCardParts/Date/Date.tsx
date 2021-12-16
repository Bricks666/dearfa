import React, { FC } from "react";
import { DateType, IOnlyClassComponent } from "../../../../Types/Common";

import { parseDate } from "./ParseDate";

interface IDate extends IOnlyClassComponent {
	date: DateType;
}

export const Date: FC<IDate> = ({ date, className, children }) => {
	return (
		<time className={className || ""} dateTime={date}>
			{children} {parseDate(date)}
		</time>
	);
};
