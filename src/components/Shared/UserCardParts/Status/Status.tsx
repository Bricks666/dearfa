import React, { FC } from 'react';
import { StandardProps } from '@/interfaces/components';
import { DataListItem } from '../..';

interface StatusProps extends StandardProps {
	readonly status: string;
}

export const Status: FC<StatusProps> = ({ children, status, className }) => {
	return (
		<DataListItem
			className={className}
			term={<>{children} Статус:</>}
			description={status}
		/>
	);
};
