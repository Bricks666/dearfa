import * as React from 'react';
import cn from 'classnames';
import { useGate, useUnit } from 'effector-react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { $authUser } from '@/models/auth';
import { $profileInfo, ProfileGate } from '@/models/profile';
import { CommonProps } from '@/types';
import { UserInfo } from '../UserInfo';
import { MeInfo } from '../MeInfo';
import { Photo } from '../Shared';

import styles from './Profile.module.css';

export interface ProfileProps extends CommonProps {}

export const Profile: React.FC<ProfileProps> = (props) => {
	const { className } = props;
	const { id: userId } = useParams();
	const user = useUnit($profileInfo);
	const { id: authId } = useUnit($authUser)!;
	const isAuth = authId === Number(userId);
	useGate(ProfileGate, Number(userId));

	return (
		<div className={cn(styles.userInfo, className)}>
			<Typography variant='h3'>{user.fullName}</Typography>
			<Photo
				className={styles.photo}
				photo={user.photos.large}
				id={user.userId}
				fullName={user.fullName}
			/>
			{isAuth ? <MeInfo user={user} /> : <UserInfo user={user} />}
		</div>
	);
};
