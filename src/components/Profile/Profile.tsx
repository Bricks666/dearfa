import * as React from 'react';
import cn from 'classnames';
import { useGate, useUnit } from 'effector-react';
import { Avatar, Typography } from '@mui/material';
import { $authUser } from '@/models/auth';
import { $profileInfo, ProfileGate } from '@/models/profile';
import { useParam } from '@/hooks';
import { profileRoute } from '@/routes';
import { CommonProps } from '@/types';
import { UserInfo } from '../UserInfo';
import { MeInfo } from '../MeInfo';

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
			<Typography variant='h3'>{user.fullName}</Typography>
			<Avatar className={styles.photo} src={user.photos.large || ''} />
			{isAuth ? <MeInfo user={user} /> : <UserInfo user={user} />}
		</div>
	);
};
