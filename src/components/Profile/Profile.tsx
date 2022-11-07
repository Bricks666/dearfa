import * as React from 'react';
import cn from 'classnames';
import { useGate, useUnit } from 'effector-react';
import { Link } from 'atomic-router-react';
import { Avatar, Button, Typography } from '@mui/material';
import { $authUser } from '@/models/auth';
import { $profileInfo, ProfileGate } from '@/models/profile';
import { dialogsRoute, profileRoute } from '@/routes';
import { useParam } from '@/hooks';
import { CommonProps } from '@/types';
import { getParams, popups } from '@/consts';
import { UserDescription } from './UserDescription';

import styles from './Profile.module.css';

export interface ProfileProps extends CommonProps {}

export const Profile: React.FC<ProfileProps> = (props) => {
	const { className } = props;
	const userId = useParam(profileRoute, 'id');
	const user = useUnit($profileInfo);
	const { id: authId } = useUnit($authUser)!;
	const isAuth = authId === Number(userId);
	useGate(ProfileGate, Number(userId));

	return (
		<div className={cn(styles.userInfo, className)}>
			<Typography variant='h4' component='h2'>
				{user.fullName}
			</Typography>
			<Avatar
				className={styles.photo}
				src={user.photos.large || ''}
				variant='rounded'
			/>
			<UserDescription className={styles.info} {...user} />
			{isAuth ? (
				<Button
					className={styles.button}
					to={profileRoute}
					params={{ id: userId }}
					query={{ [getParams.popups]: popups.updateInfo }}
					component={Link}>
					Изменить
				</Button>
			) : (
				<Button
					className={styles.button}
					to={dialogsRoute}
					params={{ id: userId }}
					component={Link}>
					Написать
				</Button>
			)}
		</div>
	);
};
