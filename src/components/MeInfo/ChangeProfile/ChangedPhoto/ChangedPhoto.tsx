import React, { FC } from 'react';
import cn from 'classnames';
import { Picture } from '@/components/Shared';
import { URL } from '@/types';
import { CommonProps } from '@/types';

import styles from './ChangedPhoto.module.css';

interface ChangePhoto {
	readonly photo: URL | null;
	readonly newPhotoURL: URL | null;
	readonly newPhoto: File | null;
}

export interface ChangePhotoProps
	extends CommonProps,
		Omit<ChangePhoto, 'newPhoto'> {}

export const ChangedPhoto: FC<ChangePhotoProps> = ({
	className,
	newPhotoURL,
	photo,
}) => {
	return (
		<object className={cn(styles.object, className)} data={newPhotoURL ?? ''}>
			<Picture className={cn(styles.photo, className)} oneXSrc={photo} alt='' />
		</object>
	);
};
