import * as React from 'react';
import cn from 'classnames';
import { useGate, useUnit } from 'effector-react';
import { Link } from 'atomic-router-react';
import { Avatar, Button, Skeleton, Typography } from '@mui/material';
import { $authUser } from '@/models/auth';
import {
	$profileInfo,
	$profileInfoLoading,
	ProfileGate,
} from '@/models/profile';
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
	const isLoading = useUnit($profileInfoLoading);
	const { id: authId } = useUnit($authUser)!;
	const isAuth = authId === Number(userId);
	useGate(ProfileGate, Number(userId));

	if (isLoading) {
		return (
			<div className={cn(styles.userInfo, className)}>
				<Typography variant='h4' component='h2'>
					<Skeleton width='10em' />
				</Typography>
				<Skeleton className={styles.photo} variant='rounded' />
				<Skeleton className={styles.info} width='25em' height='15em' />
				<Skeleton className={styles.button} width='100%' height='2em' />
			</div>
		);
	}

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
				<>
					<Button
						className={styles.button}
						to={profileRoute}
						params={{ id: userId }}
						query={{ [getParams.popups]: popups.updatePhoto }}
						component={Link}>
						Изменить фото
					</Button>
					<Button
						className={styles.button}
						to={profileRoute}
						params={{ id: userId }}
						query={{ [getParams.popups]: popups.updateInfo }}
						component={Link}>
						Изменить информацию
					</Button>
					<Button
						className={styles.button}
						to={profileRoute}
						params={{ id: userId }}
						query={{ [getParams.popups]: popups.updateStatus }}
						component={Link}>
						Изменить статус
					</Button>
				</>
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
