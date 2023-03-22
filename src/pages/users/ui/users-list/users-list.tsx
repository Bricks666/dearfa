import {
	CircularProgress,
	List,
	Pagination,
	PaginationItem
} from '@mui/material';
import { RouteInstance } from 'atomic-router';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import * as React from 'react';
import { UserItem } from '@/widgets/users';
import { useUsers } from '@/entities/users';
import { FETCH_COUNT, routes } from '@/shared/configs';
import { useParam } from '@/shared/lib';
import { CommonProps } from '@/shared/types';

import styles from './users-list.module.css';

export interface UsersListProps extends CommonProps {}

export const UsersList: React.FC<UsersListProps> = (props) => {
	const { className, } = props;

	const users = useUsers();
	const page = useParam(routes.users, 'page');

	const { data, pending, } = users;

	if (pending) {
		return <CircularProgress />;
	}

	const { items, totalCount, } = data;

	const count = Math.ceil(totalCount / FETCH_COUNT);

	return (
		<section className={cn(styles.section, className)}>
			<List>
				{items.map((item) => (
					<UserItem {...item} key={item.id} />
				))}
			</List>

			<Pagination
				className={styles.pagination}
				page={Number(page)}
				count={count}
				renderItem={(item) => {
					return (
						<PaginationItem
							to={routes.users as RouteInstance<any>}
							params={{ page: item.page, }}
							component={Link}
							{...item}
							key={item.page}
						/>
					);
				}}
				siblingCount={3}
				showFirstButton
				showLastButton
			/>
		</section>
	);
};
