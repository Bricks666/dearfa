import React, { FC } from 'react';
import { Post } from '@/models/posts';
import { Date, Photo, FullName, Like } from '..';

import styles from './Post.module.css';

interface PostCardProps {
	readonly post: Post;
}

export const PostCard: FC<PostCardProps> = ({ post }) => {
	return (
		<article className={styles.post}>
			<FullName className={styles.author} id={1}>
				Кирилл Цыганков
			</FullName>
			<Date className={styles.dateTime} date={post.date.toLocaleString()} />
			<Photo
				className={styles.photo}
				photo=''
				id={1}
				fullName='Кирилл Цыганков'
			/>
			<p className={styles.content}>{post.content}</p>
			<Like
				className={styles.like}
				status={post.like}
				likeHandler={console.log}
			/>
		</article>
	);
};
