import { Typography } from '@mui/material';
import classNames from 'classnames';
import React, { ComponentType, FC } from 'react';
import { ProfileInfo } from '@/models/profile';
import { StandardProps } from '@/interfaces/components';
import { SubsectionHeader, Photo } from '../Shared';

import ProfileInfoStyle from './ProfileInfo.module.css';

interface IProfileInfoComponent extends StandardProps {
	readonly user: ProfileInfo;
	readonly AdditionalInfo: ComponentType<any>;
}

const ProfileInfo: FC<IProfileInfoComponent> = ({
	className,
	user,
	AdditionalInfo,
}) => {
	return (
		<div className={classNames(ProfileInfoStyle.userInfo, className)}>
			<Typography variant='h3' className={ProfileInfoStyle.fullName}>
				{user.fullName}
			</Typography>
			<Photo
				className={ProfileInfoStyle.photo}
				photo={user.photos.large}
				id={user.userId}
				fullName={user.fullName}
			/>
			<AdditionalInfo user={user} />
		</div>
	);
};

export { ProfileInfo };
