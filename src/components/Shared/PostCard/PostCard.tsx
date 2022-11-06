import * as React from 'react';
import cn from 'classnames';
import { Post } from '@/models/posts';
import { CommonProps } from '@/types';
import { Date, Photo, FullName, Like } from '..';

import styles from './PostCard.module.css';

export interface PostCardProps extends CommonProps, Post {}

export const PostCard: React.FC<PostCardProps> = React.memo((props) => {
	const { content, date, className } = props;
	return (
		<article className={cn(styles.post, className)}>
			<FullName className={styles.author} id={1}>
				Кирилл Цыганков
			</FullName>
			<Date className={styles.dateTime} date={date.toLocaleString()} />
			<Photo
				className={styles.photo}
				photo=''
				id={1}
				fullName='Кирилл Цыганков'
			/>
			<p className={styles.content}>{content}</p>
			{/* <Like className={styles.like} likeHandler={console.log} /> */}
		</article>
	);
});
