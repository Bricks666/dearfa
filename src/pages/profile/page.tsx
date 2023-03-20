import * as React from 'react';
import { ProfileInfo } from '@/widgets/profile';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import styles from './page.module.css';
import { Header } from '@/components/Header';
import { Posts } from '@/components/Posts';

const ProfilePage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<MainLayout className={className} header={<Header />}>
			<ProfileInfo className={styles.userInfo} />
			<Posts className={styles.posts} />
		</MainLayout>
	);
};

pageModel.loaded();

export default ProfilePage;
