import * as React from 'react';
import cn from 'classnames';
import { Stack } from '@mui/material';
import { Picture } from '@/components/Shared';
import { CommonProps } from '@/types';
import { Profile } from '@/components/Profile';
import { Posts } from '@/components/Posts';

import styles from './ProfilePage.module.css';

export const ProfilePage: React.FC<CommonProps> = (props) => {
	const { className } = props;

	/** TODO: Добавить загрузку */
	return (
		<Stack className={className} spacing={2}>
			<Picture
				className={cn(styles.image, 'fake-photo')}
				oneXSrc='/images/bg/bg'
				alt=''
			/>
			<Profile className={styles.userInfo} />
			<Posts className={styles.posts} />
		</Stack>
	);
};
