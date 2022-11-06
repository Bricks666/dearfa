import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { List, UserCard } from '../Shared';
import { useUsersList } from '@/hooks';
import { CommonProps } from '@/types';
import { User } from '@/models/users';

export const UsersList: FC<CommonProps> = ({ className }) => {
	const { page } = useParams();
	const users = useUsersList(+page!);
	/** TODO: Сделать загрузку */
	return <List<User> className={className} items={users} Card={UserCard} />;
};
