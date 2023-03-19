import { Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { List } from '../../shared/ui';
import { FavoritFriendCard } from './FavoritFriendCard/FavoritFriendCard';
import styles from './FavoritFriends.module.css';

const FavoritFriends: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	/** TODO: Добавить загрузку */
	return (
		<aside className={cn(styles.lastCommunications, className)}>
			<Typography>Избранные друзья</Typography>
			<List className={styles.list} items={[]} Card={FavoritFriendCard} />
		</aside>
	);
};

export { FavoritFriends };
