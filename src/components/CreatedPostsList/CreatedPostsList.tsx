import React, { FC } from 'react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import { $posts } from '@/models/posts';
import { CommonProps } from '@/types';
import { PostCard } from '../Shared';

import styles from './CreatedPostsList.module.css';

export const CreatedPostsList: FC<CommonProps> = ({ className }) => {
	const posts = useUnit($posts);

	return (
		<section className={cn(styles.createdPosts, className)}>
			{posts.map((post) => (
				<PostCard {...post} key={post.id} />
			))}
		</section>
	);
};
