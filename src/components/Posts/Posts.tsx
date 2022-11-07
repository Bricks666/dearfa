import * as React from 'react';
import cn from 'classnames';
import { Typography } from '@mui/material';
import { CommonProps } from '@/types';
import { CreatePost } from './CreatePost/CreatePost';
import { PostsList } from './PostsList';

import styles from './Posts.module.css';

export const Posts: React.FC<CommonProps> = (props) => {
	const { className } = props;
	return (
		<section className={cn(styles.posts, className)}>
			<Typography className={styles.heading} variant='h4' component='h2'>
				Мои посты
			</Typography>
			<CreatePost className={styles.makeMessage} />
			<PostsList />
		</section>
	);
};
