import { Stack } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { PostCard } from './PostCard';

import styles from './PostsList.module.css';
import { $posts } from '@/models/posts';
import { CommonProps } from '@/types';

export const PostsList: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const posts = useUnit($posts);

	return (
		<Stack className={cn(styles.createdPosts, className)}>
			{posts.map((post) => (
				<PostCard {...post} key={post.id} />
			))}
		</Stack>
	);
};
