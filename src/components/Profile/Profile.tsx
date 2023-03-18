import { Avatar, Button, Skeleton, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import { useGate, useUnit } from 'effector-react';
import * as React from 'react';
import { routes , getParams, popups } from '@/shared/configs';
import styles from './Profile.module.css';
import { UserDescription } from './UserDescription';
import { useParam } from '@/hooks';
import { $authUser } from '@/models/auth';
import {
	$profileInfo,
	$profileInfoLoading,
	ProfileGate
} from '@/models/profile';
import { CommonProps } from '@/types';


export interface ProfileProps extends CommonProps {}

export const Profile: React.FC<ProfileProps> = (props) => {
	const { className, } = props;
	const userId = useParam(routes.profile, 'id');
	const user = useUnit($profileInfo);
	const isLoading = useUnit($profileInfoLoading);
	const { id: authId, } = useUnit($authUser)!;
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
						to={routes.profile}
						params={{ id: userId, }}
						query={{ [getParams.popups]: popups.updatePhoto, }}
						component={Link}>
						Изменить фото
					</Button>
					<Button
						className={styles.button}
						to={routes.profile}
						params={{ id: userId, }}
						query={{ [getParams.popups]: popups.updateInfo, }}
						component={Link}>
						Изменить информацию
					</Button>
					<Button
						className={styles.button}
						to={routes.profile}
						params={{ id: userId, }}
						query={{ [getParams.popups]: popups.updateStatus, }}
						component={Link}>
						Изменить статус
					</Button>
				</>
			) : (
				<Button
					className={styles.button}
					to={routes.dialogs}
					params={{ id: userId, }}
					component={Link}>
					Написать
				</Button>
			)}
		</div>
	);
};
