import React, { FC } from 'react';
import cn from 'classnames';
import { PagesListWithRouting, SectionHeader } from '@/components/Shared';
import { UsersList } from '@/components/UsersList';
import { CommonProps } from '@/types';

import styles from './UsersPage.module.css';

export const UsersPage: FC<CommonProps> = ({ className }) => {
	return (
		<main className={cn(styles.users, className)}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersList className={styles.list} />
			<PagesListWithRouting pageCount={10} />
		</main>
	);
};
