import * as React from 'react';
import cn from 'classnames';
import { Stack } from '@mui/material';
import { useUnit } from 'effector-react';
import { $posts } from '@/models/posts';
import { CommonProps } from '@/types';
import { PostCard } from './PostCard';

import styles from './PostsList.module.css';

export const PostsList: React.FC<CommonProps> = (props) => {
	const { className } = props;
	const posts = useUnit($posts);

	return (
		<Stack className={cn(styles.createdPosts, className)}>
			{posts.map((post) => (
				<PostCard {...post} key={post.id} />
			))}
		</Stack>
	);
};
