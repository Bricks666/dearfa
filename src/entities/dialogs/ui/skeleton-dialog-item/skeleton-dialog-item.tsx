import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Skeleton
} from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';

import styles from './skeleton-dialog-item.module.css';

export interface SkeletonDialogItemProps extends CommonProps {}

export const SkeletonDialogItem: React.FC<SkeletonDialogItemProps> = (
	props
) => {
	const { className, } = props;

	return (
		<ListItem className={className}>
			<ListItemAvatar>
				<Skeleton variant='circular'>
					<Avatar />
				</Skeleton>
			</ListItemAvatar>
			<ListItemText
				className={styles.text}
				primary={<Skeleton variant='text' width='8em' height='1em' />}
				secondary={<Skeleton variant='text' width='5em' height='1em' />}
			/>
		</ListItem>
	);
};
