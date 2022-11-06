import React, { FC } from 'react';
import classNames from 'classnames';
import { usePosts } from '@/hooks';
import { Post } from '../Shared';
import { StandardProps } from '@/interfaces/components';

import CreatedPostsListStyle from './CreatedPostsList.module.css';

export const CreatedPostsList: FC<StandardProps> = ({ className }) => {
	const posts = usePosts();

	return (
		<section
			className={classNames(CreatedPostsListStyle.createdPosts, className)}>
			{posts.map((p) => (
				<Post post={p} key={p.id} />
			))}
		</section>
	);
};
