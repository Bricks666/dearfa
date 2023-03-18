import { List } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import styles from './DataList.module.css';
import { CommonProps } from '@/types';

export const DataList: React.FC<React.PropsWithChildren<CommonProps>> = (
	props
) => {
	const { className, children, } = props;
	return (
		<List className={cn(styles.datalist, className)} dense component='dl'>
			{children}
		</List>
	);
};
