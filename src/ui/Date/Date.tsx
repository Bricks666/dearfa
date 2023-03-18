import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import * as React from 'react';
import { CommonProps } from '@/types';

export interface DateProps extends CommonProps {
	readonly date: string;
	readonly format?: string;
}

export const Date: React.FC<DateProps> = React.memo(function Date(props) {
	const { className, date, format = 'DD MM', } = props;
	const formattedDate = dayjs(date).format(format);
	return (
		<Typography className={className} component='data'>
			{formattedDate}
		</Typography>
	);
});
