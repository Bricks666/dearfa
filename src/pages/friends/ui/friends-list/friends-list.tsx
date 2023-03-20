import {
	CircularProgress,
	List,
	Pagination,
	PaginationItem
} from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import * as React from 'react';
import { UserItem } from '@/widgets/users';
import { useFriends } from '@/entities/users';
import { FETCH_COUNT, routes } from '@/shared/configs';
import { useParam } from '@/shared/lib';
import { CommonProps } from '@/shared/types';

import styles from './friends-list.module.css';

export interface FriendsListProps extends CommonProps {}

export const FriendsList: React.FC<FriendsListProps> = (props) => {
	const { className, } = props;

	const friends = useFriends();
	const page = useParam(routes.friends, 'page');

	const { data, pending, } = friends;

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
							to={routes.friends}
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
