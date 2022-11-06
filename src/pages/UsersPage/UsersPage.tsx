import React, { FC } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { PagesListWithRouting, SectionHeader } from '@/components/Shared';
import { UsersList } from '@/components/UsersList';
import { StandardProps } from '@/interfaces/components';
import { selectPageCount } from '@/models/users';

import UsersPageStyle from './UsersPage.module.css';

export const UsersPage: FC<StandardProps> = ({ className }) => {
	const pageCount = useSelector(selectPageCount);

	return (
		<main className={classNames(UsersPageStyle.users, className)}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersList className={UsersPageStyle.list} />
			<PagesListWithRouting pageCount={pageCount} />
		</main>
	);
};
