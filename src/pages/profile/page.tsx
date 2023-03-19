import { Stack } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import styles from './page.module.css';
import { Posts } from '@/components/Posts';
import { Profile } from '@/components/Profile';

const ProfilePage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<Stack className={className} spacing={1}>
			<Profile className={styles.userInfo} />
			<Posts className={styles.posts} />
		</Stack>
	);
};

export default ProfilePage;
