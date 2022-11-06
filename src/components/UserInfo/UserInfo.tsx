import React, { FC } from 'react';
import { ProfileInfo } from '@/models/profile';
import { ButtonLink } from '../Shared';
import { UserDescription } from '../UserDescription/UserDescription';

import styles from './UserInfo.module.css';

interface UserInfoProps {
	readonly user: ProfileInfo;
}

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
	return (
		<>
			<UserDescription
				contacts={user.contacts}
				aboutMe={user.aboutMe}
				status={user.status}
			/>
			<ButtonLink className={styles.button} to={`/dialogs/${user.userId}`}>
				Написать
			</ButtonLink>
		</>
	);
};
