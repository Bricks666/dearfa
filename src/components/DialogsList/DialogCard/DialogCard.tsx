import cn from 'classnames';
import * as React from 'react';
import { Link } from 'atomic-router-react';
import { Avatar, Card, CardHeader, Typography } from '@mui/material';
import { Dialog } from '@/models/dialogs';
import { dialogsRoute } from '@/routes';
import { CommonProps } from '@/types';

export interface DialogCardProps extends CommonProps, Dialog {}

export const DialogCard: React.FC<DialogCardProps> = React.memo((props) => {
	const {
		className,
		userName,
		id,
		photos: { small },
	} = props;
	return (
		<Card
			className={className}
			component={Link}
			to={dialogsRoute}
			params={{ id }}
			aria-label={`чат с ${userName}`}>
			<CardHeader
				avatar={
					<Avatar
						src={small || '/images/ProfileBackground/SunSet'}
						alt={userName}
					/>
				}
				title={<Typography>{userName}</Typography>}
			/>
		</Card>
	);
});
