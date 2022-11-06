import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { List, UserCard } from '../Shared';
import { useUsersList } from '@/hooks';
import { StandardProps } from '@/interfaces/components';
import { User } from '@/models/users';

export const UsersList: FC<StandardProps> = ({ className }) => {
	const { page } = useParams();
	const users = useUsersList(+page!);
	/** TODO: Сделать загрузку */
	return <List<User> className={className} items={users} Card={UserCard} />;
};
