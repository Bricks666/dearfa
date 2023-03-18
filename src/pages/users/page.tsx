import cn from 'classnames';
import * as React from 'react';
import styles from './page.module.css';
import { UsersList } from '@/components/UsersList';
import { CommonProps } from '@/types';
import { PagesListWithRouting, SectionHeader } from '@/ui';


const UsersPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<main className={cn(styles.users, className)}>
			<SectionHeader>Все пользователи</SectionHeader>
			<UsersList />
			<PagesListWithRouting pageCount={10} />
		</main>
	);
};

export default UsersPage;
