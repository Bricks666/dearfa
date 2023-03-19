import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import styles from './page.module.css';
import { Header } from '@/components/Header';
import { Posts } from '@/components/Posts';
import { Profile } from '@/components/Profile';

const ProfilePage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<MainLayout className={className} header={<Header />}>
			<Profile className={styles.userInfo} />
			<Posts className={styles.posts} />
		</MainLayout>
	);
};

export default ProfilePage;
