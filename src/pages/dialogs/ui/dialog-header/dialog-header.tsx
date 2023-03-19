import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { Dialog } from '@/shared/api';
import { CommonProps } from '@/shared/types';
import { Date } from '@/shared/ui';
import styles from './dialog-header.module.css';

export interface DialogHeaderProps
	extends CommonProps,
		Pick<Dialog, 'userName' | 'photos' | 'id' | 'lastUserActivityDate'> {}

export const DialogHeader: React.FC<DialogHeaderProps> = (props) => {
	const { className, lastUserActivityDate, photos, userName, } = props;
	return (
		<AppBar
			className={cn(styles.header, className)}
			position='static'
			variant='outlined'>
			<Toolbar>
				<Avatar className={styles.photo} src={photos?.small} />
				<Typography className={styles.name}>{userName}</Typography>
				<Date
					className={styles.date}
					date={lastUserActivityDate}
					format='HH:mm DD-MM-YYYY'
				/>
			</Toolbar>
		</AppBar>
	);
};
