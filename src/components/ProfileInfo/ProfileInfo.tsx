import * as React from 'react';
import cn from 'classnames';
import { Typography } from '@mui/material';
import { ProfileInfo } from '@/models/profile';
import { CommonProps } from '@/types';
import { SubsectionHeader, Photo } from '../Shared';

import styles from './ProfileInfo.module.css';

interface ProfileProps extends CommonProps {
	readonly user: ProfileInfo;
	readonly AdditionalInfo: React.ComponentType;
}

const ProfileInfo: React.FC<ProfileProps> = ({
	className,
	user,
	AdditionalInfo,
}) => {
	return (
		<div className={cn(styles.userInfo, className)}>
			<Typography variant='h3' className={styles.fullName}>
				{user.fullName}
			</Typography>
			<Photo
				className={styles.photo}
				photo={user.photos.large}
				id={user.userId}
				fullName={user.fullName}
			/>
			<AdditionalInfo user={user} />
		</div>
	);
};

export { ProfileInfo };
