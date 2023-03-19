import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography
} from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import * as React from 'react';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { Like } from '@/shared/ui';
import styles from './PostCard.module.css';
import { Post } from '@/models/posts';

export interface PostCardProps extends CommonProps, Post {}

export const PostCard: React.FC<PostCardProps> = React.memo((props) => {
	const { className, content, authorId, likeCount, liked, } = props;
	return (
		<Card className={cn(styles.post, className)}>
			<CardHeader
				avatar={<Avatar className={styles.photo} src='' />}
				title={
					<Typography className={styles.author} variant='h6' component='p'>
						<Link to={routes.profile} params={{ id: authorId, }}>
							Кирилл Цыганков
						</Link>
					</Typography>
				}
			/>
			<CardContent>
				{/* <Date className={styles.dateTime} date={date.toLocaleString()} /> */}
				<Typography className={styles.content}>{content}</Typography>
			</CardContent>
			<CardActions>
				<Like className={styles.like} count={likeCount} liked={liked} />
			</CardActions>
		</Card>
	);
});
