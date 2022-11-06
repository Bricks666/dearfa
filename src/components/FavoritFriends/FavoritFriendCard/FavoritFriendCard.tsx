import React, { FC } from 'react';
import { Photo } from '@/components/Shared';
import { CommonProps } from '@/types';
import { User } from '@/models/users';

import styles from './FavoritFriendCard.module.css';

interface FavoriteFriendCardProps
	extends CommonProps,
		Pick<User, 'photos' | 'id' | 'name'> {}

export const FavoritFriendCard: FC<FavoriteFriendCardProps> = ({
	className,
	photos: { small },
	id,
	name,
}) => {
	return (
		<li className={className}>
			<Photo className={styles.photo} photo={small} id={id} fullName={name} />
		</li>
	);
};
