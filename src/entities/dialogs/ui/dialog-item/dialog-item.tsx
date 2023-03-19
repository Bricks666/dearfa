import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText
} from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { Dialog } from '@/shared/api';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { Date } from '@/shared/ui';

export interface DialogItemProps extends CommonProps, Dialog {}

export const DialogItem: React.FC<DialogItemProps> = (props) => {
	const { className, id, lastUserActivityDate, photos, userName, } = props;

	return (
		<ListItem className={className}>
			<ListItemButton to={routes.dialogs} params={{ id, }} component={Link}>
				<ListItemAvatar>
					<Avatar src={photos.small!} alt={userName} />
				</ListItemAvatar>
				<ListItemText
					primary={userName}
					secondary={
						<Date date={lastUserActivityDate} format='HH:mm DD-MM-YYYY' />
					}
				/>
			</ListItemButton>
		</ListItem>
	);
};
