import * as React from 'react';
import cn from 'classnames';
import { ListItem, Typography } from '@mui/material';
import { CommonProps } from '@/types';

import styles from './DataListItem.module.css';

export interface DataListItemProps extends CommonProps {
	readonly term: React.ReactNode;
	readonly description: React.ReactNode;
	readonly termClass?: string;
	readonly descriptionClass?: string;
}

export const DataListItem: React.FC<DataListItemProps> = (props) => {
	const { className, termClass, descriptionClass, term, description } = props;
	return (
		<ListItem className={cn(styles.item, className)} component='div'>
			<Typography className={cn(styles.term, termClass)} component='dt'>
				{term}
			</Typography>
			<Typography className={cn(styles.desc, descriptionClass)} component='dd'>
				{description}
			</Typography>
		</ListItem>
	);
};