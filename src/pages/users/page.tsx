import { Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageLoadModel } from './model';
import styles from './page.module.css';
import { UsersList } from './ui';
import { Header } from '@/components/Header';

const UsersPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<MainLayout className={cn(styles.users, className)} header={<Header />}>
			<Typography variant='h4' textAlign='center' component='h2'>
				Все пользователи
			</Typography>
			<UsersList />
		</MainLayout>
	);
};

pageLoadModel.loaded();

export default UsersPage;
