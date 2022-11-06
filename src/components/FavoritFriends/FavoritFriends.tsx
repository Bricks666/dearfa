import React, { FC } from 'react';
import cn from 'classnames';
import { List, SubsectionHeader } from '../Shared';
import { FavoritFriendCard } from './FavoritFriendCard/FavoritFriendCard';
import { useFavoritFriends } from '@/hooks';
import { CommonProps } from '@/types';

import styles from './FavoritFriends.module.css';

const FavoritFriends: FC<CommonProps> = ({ className }) => {
	const friends = useFavoritFriends();

	/** TODO: Добавить загрузку */
	return (
		<aside className={cn(styles.lastCommunications, className)}>
			<SubsectionHeader>Избранные друзья</SubsectionHeader>
			<List className={styles.list} items={friends} Card={FavoritFriendCard} />
		</aside>
	);
};

export { FavoritFriends };
