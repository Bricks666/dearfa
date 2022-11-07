import cn from 'classnames';
import * as React from 'react';
import { Link } from 'atomic-router-react';
import { SubsectionHeader, Picture } from '@/components/Shared';
import { CommonProps } from '@/types';
import { Dialog } from '@/models/dialogs';
import { dialogsRoute } from '@/routes';

import styles from './Dialog.module.css';

export interface DialogCardProps extends CommonProps, Dialog {}

export const DialogCard: React.FC<DialogCardProps> = React.memo((props) => {
	const {
		className,
		userName,
		id,
		photos: { small },
	} = props;
	return (
		<li className={cn(styles.dialog, className)}>
			<Link
				className={styles.link}
				activeClassName={styles.linkActive}
				to={dialogsRoute}
				params={{ id }}
				aria-label={`чат с ${userName}`}>
				<SubsectionHeader className={styles.fullName}>
					{userName}
				</SubsectionHeader>
				<Picture
					className={cn(styles.photo, 'fake-photo')}
					oneXSrc={small || '/Images/ProfileBackground/SunSet'}
					alt={userName}
				/>
			</Link>
		</li>
	);
});
