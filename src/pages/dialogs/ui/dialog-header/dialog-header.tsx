import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { Date } from '@/shared/ui';
import { pageDialogsModel } from '../../models';
import styles from './dialog-header.module.css';

export interface DialogHeaderProps extends CommonProps {}

export const DialogHeader: React.FC<DialogHeaderProps> = (props) => {
	const { className, } = props;
	const dialog = useUnit(pageDialogsModel.$activeDialog)!;
	const { lastUserActivityDate, photos, userName, id = 0, } = dialog || {};

	return (
		<AppBar className={styles.bar} position='static' variant='outlined'>
			<Toolbar className={cn(styles.header, className)}>
				<Link to={routes.profile} params={{ id, }}>
					<Avatar src={photos?.small} />
				</Link>
				<div className={styles.info}>
					<Typography className={styles.name}>
						<Link className={styles.link} to={routes.profile} params={{ id, }}>
							{userName}
						</Link>
					</Typography>
					<Date
						className={styles.date}
						date={lastUserActivityDate}
						format='HH:mm DD-MM-YYYY'
					/>
				</div>
				<IconButton
					className={styles.close}
					to={routes.dialogs}
					component={Link}>
					<CloseIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};
