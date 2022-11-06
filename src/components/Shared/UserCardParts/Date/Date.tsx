import React, { FC } from 'react';
import { DateType } from '@/types';
import { CommonProps } from '@/types';

import { parseDate } from './ParseDate';

interface DateProps extends CommonProps {
	readonly date: DateType;
}

export const Date: FC<DateProps> = ({ date, className, children }) => {
	return (
		<time className={className || ''} dateTime={date}>
			{children} {parseDate(date)}
		</time>
	);
};
