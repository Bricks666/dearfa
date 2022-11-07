import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/types';
import { PagesListWithRouting, SectionHeader } from '@/ui';
import { UsersList } from '@/components/UsersList';

import styles from './UsersPage.module.css';

export const UsersPage: React.FC<CommonProps> = (props) => {
	const { className } = props;

	return (
		<main className={cn(styles.users, className)}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersList />
			<PagesListWithRouting pageCount={10} />
		</main>
	);
};
