import * as React from 'react';
import { CommonProps } from '@/types';
import { DataListItem } from '../..';

interface StatusProps extends CommonProps {
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
