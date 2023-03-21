import * as React from 'react';
import { Popups } from '@/widgets/popups';
import { ProfileInfo } from '@/widgets/profile';
import { UpdateInfo, UpdateStatus } from '@/features/profile';
import { POPUP_NAMES } from '@/shared/configs';
import { BasePopupProps, CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import styles from './page.module.css';
import { Header } from '@/components/Header';
import { Posts } from '@/components/Posts';

const popupsMap: Record<string, React.ComponentType<BasePopupProps>> = {
	[POPUP_NAMES.updateInfo]: UpdateInfo,
	[POPUP_NAMES.updateStatus]: UpdateStatus,
};

const ProfilePage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<MainLayout className={className} header={<Header />}>
			<ProfileInfo className={styles.userInfo} />
			<Posts className={styles.posts} />
			<Popups popupsMap={popupsMap} />
		</MainLayout>
	);
};

pageModel.loaded();

export default ProfilePage;
