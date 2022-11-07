import * as React from 'react';
import { useParam } from '@/hooks';
import { CommonProps } from '@/types';
import { List, UserCard } from '../Shared';
import { usersRoute } from '@/routes';

export const UsersList: React.FC<CommonProps> = (props) => {
	const { className } = props;
	const page = useParam(usersRoute, 'page');
	/** TODO: Сделать загрузку */
	return <List className={className} items={[]} Card={UserCard} />;
};
