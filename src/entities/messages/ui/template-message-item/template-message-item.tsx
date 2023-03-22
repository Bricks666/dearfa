import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { Message } from '@/shared/api';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { Date } from '@/shared/ui';

import styles from './template-message-item.module.css';

export interface TemplateMessageItemProps extends CommonProps, Message {
	readonly avatar?: null | React.ReactElement;
	readonly actions?: null | React.ReactElement;
}

export const TemplateMessageItem: React.FC<TemplateMessageItemProps> = (
	props
) => {
	const { className, addedAt, body, senderId, senderName, avatar, actions, } =
		props;

	return (
		<Card className={className} variant='outlined'>
			<CardHeader
				avatar={avatar}
				actions={actions}
				title={
					<Typography>
						<Link
							className={styles.link}
							to={routes.profile}
							params={{ id: senderId, }}>
							{senderName}
						</Link>
					</Typography>
				}
				subheader={<Date date={addedAt} format='HH:mm DD-MM-YYYY' />}
			/>
			<CardContent>
				<Typography>{body}</Typography>
			</CardContent>
		</Card>
	);
};
