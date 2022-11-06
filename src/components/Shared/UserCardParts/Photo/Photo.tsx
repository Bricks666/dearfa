import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { StandardProps } from '@/interfaces/components';
import { ID, URL } from '@/interfaces/common';
import { Picture } from '../../Picture/Picture';

import PhotoStyle from './Photo.module.css';

interface PhotoProps extends StandardProps {
	readonly id: ID;
	readonly photo: URL | null;
	readonly fullName: string;
}

export const Photo: FC<PhotoProps> = ({ className, fullName, photo, id }) => {
	return (
		<Link
			className={classNames(PhotoStyle.link, className)}
			to={`/profile/${id}`}
			title={fullName}>
			<Picture
				className={classNames(PhotoStyle.photo, 'fake-photo')}
				oneXSrc={photo || '/images/bg/bg'}
				alt={fullName}
			/>
		</Link>
	);
};
