import React, { FC } from 'react';
import cn from 'classnames';
import { usePosts } from '@/hooks';
import { Post } from '../Shared';
import { CommonProps } from '@/types';

import styles from './CreatedPostsList.module.css';

export const CreatedPostsList: FC<CommonProps> = ({ className }) => {
	const posts = usePosts();

	return (
		<section className={cn(styles.createdPosts, className)}>
			{posts.map((p) => (
				<Post post={p} key={p.id} />
			))}
		</section>
	);
};
