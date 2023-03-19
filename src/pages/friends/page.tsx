import { Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { pageLoadModel } from './model';
import styles from './page.module.css';
import { FriendsList } from './ui';

const FriendsPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<main className={cn(styles.friends, className)}>
			<Typography variant='h4' textAlign='center' component='h2'>
				Друзья
			</Typography>
			<FriendsList />
		</main>
	);
};

pageLoadModel.loaded();

export default FriendsPage;
