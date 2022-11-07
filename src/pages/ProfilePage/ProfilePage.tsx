import * as React from 'react';
import { Stack } from '@mui/material';
import { CommonProps } from '@/types';
import { Profile } from '@/components/Profile';
import { Posts } from '@/components/Posts';

import styles from './ProfilePage.module.css';

export const ProfilePage: React.FC<CommonProps> = (props) => {
	const { className } = props;

	return (
		<Stack className={className} spacing={1}>
			<Profile className={styles.userInfo} />
			<Posts className={styles.posts} />
		</Stack>
	);
};
