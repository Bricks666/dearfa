import * as React from 'react';
import styles from './page.module.css';
import { FriendsList } from '@/components/FriendsList';
import { CommonProps } from '@/types';
import { PagesListWithRouting, SectionHeader } from '@/ui';


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
