import { Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CreatePost } from './CreatePost/CreatePost';

import styles from './Posts.module.css';
import { PostsList } from './PostsList';
import { CommonProps } from '@/types';

export const Posts: React.FC<CommonProps> = (props) => {
	const { className, } = props;
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
