import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { PostCard } from '@/widgets/posts';
import { postsModel } from '@/entities/posts';
import { CommonProps } from '@/shared/types';

import styles from './posts-list.module.css';

export const PostsList: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const posts = useUnit(postsModel.query);

	return (
		<section className={cn(styles.posts, className)}>
			{posts.data.map((post) => (
				<PostCard {...post} key={post.id} />
			))}
		</section>
	);
};
