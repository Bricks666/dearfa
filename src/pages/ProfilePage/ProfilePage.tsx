import * as React from 'react';
import { useUnit } from 'effector-react';
import cn from 'classnames';
import { Stack } from '@mui/material';
import { Picture } from '@/components/Shared';
import { $authUser } from '@/models/auth';
import { ProfileInfo } from '@/components/ProfileInfo/ProfileInfo';
import { Posts } from '@/components/Posts/Posts';
import { MeInfo } from '@/components/MeInfo';
import { UserInfo } from '@/components/UserInfo';
import { CommonProps } from '@/types';

import styles from './ProfilePage.module.css';

export const ProfilePage: React.FC<CommonProps> = (props) => {
	const { className } = props;
	const { id: authId } = useUnit($authUser)!;

	/** TODO: Добавить загрузку */
	return (
		<Stack className={className} spacing={2}>
			<Picture
				className={cn(styles.image, 'fake-photo')}
				oneXSrc='/images/bg/bg'
				alt=''
			/>
			<ProfileInfo
				className={styles.userInfo}
				AdditionalInfo={authId === id ? MeInfo : UserInfo}
			/>
			<Posts className={styles.posts} />
		</Stack>
	);
};
