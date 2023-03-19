import { useGate, useUnit } from 'effector-react';
import * as React from 'react';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { List, UserCard } from '../../shared/ui';
import { useParam } from '@/hooks';
import { FriendsGate, getFriendsQuery } from '@/models/users';

export const FriendsList: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const page = useParam(routes.friends, 'page');
	const friends = useUnit(getFriendsQuery.$data) || [];
	useGate(FriendsGate, { page: Number(page), count: 10, });

	/** TODO: Добавить загрузку */
	return <List className={className} items={friends} Card={UserCard} />;
};
