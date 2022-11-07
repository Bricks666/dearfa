import * as React from 'react';
import { useGate, useUnit } from 'effector-react';
import { FriendsGate, getFriendsQuery } from '@/models/users';
import { useParam } from '@/hooks';
import { friendsRoute } from '@/routes';
import { CommonProps } from '@/types';
import { List, UserCard } from '../Shared';

export const FriendsList: React.FC<CommonProps> = (props) => {
	const { className } = props;
	const page = useParam(friendsRoute, 'page');
	const friends = useUnit(getFriendsQuery.$data) || [];
	useGate(FriendsGate, { page: Number(page), count: 10 });

	/** TODO: Добавить загрузку */
	return <List className={className} items={friends} Card={UserCard} />;
};
