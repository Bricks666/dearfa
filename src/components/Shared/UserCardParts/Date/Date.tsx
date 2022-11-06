import React, { FC } from 'react';
import { DateType } from '@/interfaces/common';
import { StandardProps } from '@/interfaces/components';

import { parseDate } from './ParseDate';

interface DateProps extends StandardProps {
	readonly date: DateType;
}

export const Date: FC<DateProps> = ({ date, className, children }) => {
	return (
		<time className={className || ''} dateTime={date}>
			{children} {parseDate(date)}
		</time>
	);
};
