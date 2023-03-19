import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { Photo } from '@/shared/ui';
import styles from './FavoritFriendCard.module.css';
import { User } from '@/models/users';

interface FavoriteFriendCardProps
	extends CommonProps,
		Pick<User, 'photos' | 'id' | 'name'> {}

export const FavoritFriendCard: React.FC<FavoriteFriendCardProps> = (props) => {
	const {
		className,
		photos: { small, },
		id,
		name,
	} = props;
	return (
		<li className={className}>
			<Photo className={styles.photo} photo={small} id={id} fullName={name} />
		</li>
	);
};
