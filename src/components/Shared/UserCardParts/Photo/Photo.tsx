import cn from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CommonProps } from '@/types';
import { ID, URL } from '@/types';
import { Picture } from '../../Picture/Picture';

import styles from './Photo.module.css';

interface PhotoProps extends CommonProps {
	readonly id: ID;
	readonly photo: URL | null;
	readonly fullName: string;
}

export const Photo: FC<PhotoProps> = ({ className, fullName, photo, id }) => {
	return (
		<Link
			className={cn(styles.link, className)}
			to={`/profile/${id}`}
			title={fullName}>
			<Picture
				className={cn(styles.photo, 'fake-photo')}
				oneXSrc={photo || '/images/bg/bg'}
				alt={fullName}
			/>
		</Link>
	);
};
