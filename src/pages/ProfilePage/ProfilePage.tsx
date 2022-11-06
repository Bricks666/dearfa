import React, { FC } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import { Picture } from '@/components/Shared';
import { useProfile } from '@/hooks';
import { ProfileInfo } from '@/components/ProfileInfo/ProfileInfo';
import { Posts } from '@/components/Posts/Posts';
import { MeInfo } from '@/components/MeInfo';
import { UserInfo } from '@/components/UserInfo';
import { StandardProps } from '@/interfaces/components';
import { selectAuthId } from '@/models/auth';

import ProfilePageStyle from './ProfilePage.module.css';

export const ProfilePage: FC<StandardProps> = ({ className }) => {
	const { id = 0 } = useParams();
	const user = useProfile(+id);
	const authId = useSelector(selectAuthId);

	/** TODO: Добавить загрузку */
	return (
		<Stack className={className} spacing={2}>
			<Picture
				className={classNames(ProfilePageStyle.image, 'fake-photo')}
				oneXSrc='/images/bg/bg'
				alt=''
			/>
			<ProfileInfo
				className={ProfilePageStyle.userInfo}
				user={user}
				AdditionalInfo={authId === id ? MeInfo : UserInfo}
			/>
			<Posts className={ProfilePageStyle.posts} />
		</Stack>
	);
};
