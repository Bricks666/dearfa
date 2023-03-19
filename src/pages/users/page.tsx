import { Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { pageLoadModel } from './model';
import styles from './page.module.css';
import { UsersList } from './ui';

const UsersPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<main className={cn(styles.users, className)}>
			<Typography variant='h4' component='h2'>
				Все пользователи
			</Typography>
			<UsersList />
		</main>
	);
};

pageLoadModel.loaded();

export default UsersPage;
