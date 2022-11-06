import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { PagesListWithRouting, SectionHeader } from '@/components/Shared';
import { FriendsList } from '@/components/FriendsList';
import { StandardProps } from '@/interfaces/components';
import { selectPageCount } from '@/models/friends';

import FriendsPageStyle from './FriendsPage.module.css';

export const FriendsPage: FC<StandardProps> = ({ className }) => {
	const pageCount = useSelector(selectPageCount);

	return (
		<main className={className}>
			<SectionHeader>Друзья</SectionHeader>
			<FriendsList className={FriendsPageStyle.list} />
			<PagesListWithRouting pageCount={pageCount} />
		</main>
	);
};
