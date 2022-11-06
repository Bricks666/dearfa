import cn from 'classnames';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SubsectionHeader, Picture } from '@/components/Shared';
import { CommonProps } from '@/types';
import { Dialog } from '@/models/dialogs';

import styles from './Dialog.module.css';

interface DialogProps extends CommonProps, Dialog {}

export const DialogCard: FC<DialogProps> = ({
	className,
	userName,
	id,
	photos: { small },
}) => {
	return (
		<li className={cn(styles.dialog, className)}>
			<NavLink
				to={`/dialogs/${id}`}
				className={({ isActive }) =>
					cn(styles.link, { [styles.linkActive]: isActive })
				}
				aria-label={`чат с ${userName}`}>
				<SubsectionHeader className={styles.fullName}>
					{userName}
				</SubsectionHeader>
				<Picture
					className={cn(styles.photo, 'fake-photo')}
					oneXSrc={small || '/Images/ProfileBackground/SunSet'}
					alt={userName}
				/>
			</NavLink>
		</li>
	);
};
