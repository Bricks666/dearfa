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
import * as React from 'react';
import { Post } from '@/shared/api';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { Date } from '@/shared/ui';

export interface TemplatePostCardProps extends CommonProps, Post {
	readonly actions?: React.ReactElement | null;
}

export const TemplatePostCard: React.FC<TemplatePostCardProps> = React.memo(
	(props) => {
		const { className, content, authorId, createdAt, actions, } = props;
		return (
			<Card className={className} variant='outlined'>
				<CardHeader
					avatar={<Avatar src='' />}
					title={
						<Typography variant='h6' component='p'>
							<Link to={routes.profile} params={{ id: authorId, }}>
								Кирилл Цыганков
							</Link>
						</Typography>
					}
					subheader={<Date date={createdAt} format='HH:mm DD-MM-YYYY' />}
				/>
				<CardContent>
					<Typography>{content}</Typography>
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
