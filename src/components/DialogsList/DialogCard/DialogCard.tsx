// import cn from 'classnames';
import {
	Avatar,
	Card,
	CardActionArea,
	CardHeader,
	Typography
} from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { routes } from '@/shared/configs';
import { Dialog } from '@/models/dialogs';
import { CommonProps } from '@/types';

export interface DialogCardProps extends CommonProps, Dialog {}

export const DialogCard: React.FC<DialogCardProps> = React.memo((props) => {
	const {
		className,
		userName,
		id,
		photos: { small, },
	} = props;
	return (
		<Card className={className} aria-label={`чат с ${userName}`}>
			<CardActionArea component={Link} to={routes.dialogs} params={{ id, }}>
				<CardHeader
					avatar={
						<Avatar
							src={small || '/images/ProfileBackground/SunSet'}
							alt={userName}
						/>
					}
					title={<Typography>{userName}</Typography>}
				/>
			</CardActionArea>
		</Card>
	);
});
