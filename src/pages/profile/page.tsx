import cn from 'classnames';
import * as React from 'react';
import { Popups } from '@/widgets/popups';
import { ProfileInfo } from '@/widgets/profile';
import { CreatePost } from '@/features/posts';
import { UpdateInfo, UpdatePhoto, UpdateStatus } from '@/features/profile';
import { POPUP_NAMES } from '@/shared/configs';
import { BasePopupProps, CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import styles from './page.module.css';
import { PostsList } from './ui';
import { Header } from '@/components/Header';

const popupsMap: Record<string, React.ComponentType<BasePopupProps>> = {
	[POPUP_NAMES.updateInfo]: UpdateInfo,
	[POPUP_NAMES.updateStatus]: UpdateStatus,
	[POPUP_NAMES.updatePhoto]: UpdatePhoto,
};

const ProfilePage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<MainLayout className={cn(styles.layout, className)} header={<Header />}>
			<ProfileInfo />
			<div>
				<CreatePost />
				<PostsList />
			</div>
			<Popups popupsMap={popupsMap} />
		</MainLayout>
	);
};

pageModel.loaded();

export default ProfilePage;
