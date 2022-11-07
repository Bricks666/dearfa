import * as React from 'react';
import cn from 'classnames';
import { Typography } from '@mui/material';
import { List } from '../../ui';
import { FavoritFriendCard } from './FavoritFriendCard/FavoritFriendCard';
import { CommonProps } from '@/types';

import styles from './FavoritFriends.module.css';

const FavoritFriends: FC<CommonProps> = ({ className }) => {
	/** TODO: Добавить загрузку */
	return (
		<aside className={cn(styles.lastCommunications, className)}>
			<Typography>Избранные друзья</Typography>
			<List className={styles.list} items={[]} Card={FavoritFriendCard} />
		</aside>
	);
};

export { FavoritFriends };
