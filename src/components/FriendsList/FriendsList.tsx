import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { StandardProps } from '@/interfaces/components';
import { useFriends } from '@/hooks';
import { List, UserCard } from '../Shared';

export const FriendsList: FC<StandardProps> = ({ className }) => {
	const { page } = useParams();
	const friends = useFriends(+page!);
	/** TODO: Добавить загрузку */
	return <List className={className} items={friends} Card={UserCard} />;
};
