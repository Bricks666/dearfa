import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { PagesListWithRouting, SectionHeader } from '@/shared/ui';
import styles from './page.module.css';
import { FriendsList } from '@/components/FriendsList';

const FriendsPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<main className={className}>
			<SectionHeader>Друзья</SectionHeader>
			<FriendsList className={styles.list} />
			<PagesListWithRouting pageCount={10} />
		</main>
	);
};

export default FriendsPage;
