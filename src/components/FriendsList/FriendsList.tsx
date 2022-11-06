import * as React from 'react';
import { useGate, useUnit } from 'effector-react';
import { useParams } from 'react-router-dom';
import { FriendsGate, getFriendsQuery } from '@/models/users';
import { CommonProps } from '@/types';
import { List, UserCard } from '../Shared';

export const FriendsList: React.FC<CommonProps> = (props) => {
	const { className } = props;
	const { page } = useParams();
	const friends = useUnit(getFriendsQuery.$data) || [];
	useGate(FriendsGate, { page: Number(page), count: 10 });

	/** TODO: Добавить загрузку */
	return <List className={className} items={friends} Card={UserCard} />;
};
