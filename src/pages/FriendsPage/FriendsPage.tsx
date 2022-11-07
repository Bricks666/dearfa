import * as React from 'react';
import { PagesListWithRouting, SectionHeader } from '@/ui';
import { FriendsList } from '@/components/FriendsList';
import { CommonProps } from '@/types';

import styles from './FriendsPage.module.css';

export const FriendsPage: React.FC<CommonProps> = (props) => {
	const { className } = props;

	return (
		<main className={className}>
			<SectionHeader>Друзья</SectionHeader>
			<FriendsList className={styles.list} />
			<PagesListWithRouting pageCount={10} />
		</main>
	);
};
