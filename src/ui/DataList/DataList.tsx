import * as React from 'react';
import cn from 'classnames';
import { List } from '@mui/material';
import { CommonProps } from '@/types';

import styles from './DataList.module.css';

export const DataList: React.FC<React.PropsWithChildren<CommonProps>> = (
	props
) => {
	const { className, children } = props;
	return (
		<List className={cn(styles.datalist, className)} dense component='dl'>
			{children}
		</List>
	);
};
