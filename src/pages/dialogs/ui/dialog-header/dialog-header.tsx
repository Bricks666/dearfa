import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Date } from '@/shared/ui';
import { pageDialogsModel } from '../../models';
import styles from './dialog-header.module.css';

export interface DialogHeaderProps extends CommonProps {}

export const DialogHeader: React.FC<DialogHeaderProps> = (props) => {
	const { className, } = props;
	const dialog = useUnit(pageDialogsModel.$activeDialog)!;
	const { lastUserActivityDate, photos, userName, } = dialog || {};

	return (
		<AppBar className={styles.bar} position='static' variant='outlined'>
			<Toolbar className={cn(styles.header, className)}>
				<Avatar src={photos?.small} />
				<div className={styles.info}>
					<Typography className={styles.name}>{userName}</Typography>
					<Date
						className={styles.date}
						date={lastUserActivityDate}
						format='HH:mm DD-MM-YYYY'
					/>
				</div>
			</Toolbar>
		</AppBar>
	);
};
