import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Divider,
	Typography
} from '@mui/material';
import { Link } from 'atomic-router-react';
import cn from 'classnames';
import * as React from 'react';
import { Post } from '@/shared/api';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { Date } from '@/shared/ui';
import styles from './template-post-card.module.css';

export interface TemplatePostCardProps extends CommonProps, Post {
	readonly actions?: React.ReactElement | null;
}

export const TemplatePostCard: React.FC<TemplatePostCardProps> = React.memo(
	(props) => {
		const { className, content, authorId, createdAt, actions, } = props;
		return (
			<Card className={cn(styles.post, className)} variant='outlined'>
				<CardHeader
					avatar={<Avatar className={styles.photo} src='' />}
					title={
						<Typography className={styles.author} variant='h6' component='p'>
							<Link to={routes.profile} params={{ id: authorId, }}>
								Кирилл Цыганков
							</Link>
						</Typography>
					}
					subheader={
						<Date
							className={styles.dateTime}
							date={createdAt}
							format='HH:mm DD-MM-YYYY'
						/>
					}
				/>
				<CardContent>
					<Typography className={styles.content}>{content}</Typography>
				</CardContent>
				{actions ? (
					<>
						<Divider />
						<CardActions>{actions}</CardActions>
					</>
				) : null}
			</Card>
		);
	}
);
