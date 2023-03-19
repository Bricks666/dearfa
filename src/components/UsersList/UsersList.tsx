import * as React from 'react';
// import { useParam } from '@/hooks';
import { CommonProps } from '@/shared/types';
import { List, UserCard } from '@/shared/ui';
// import { routes } from '@/shared/configs';

export const UsersList: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	// const page = useParam(routes.users, 'page');
	/** TODO: Сделать загрузку */
	return <List className={className} items={[]} Card={UserCard} />;
};
