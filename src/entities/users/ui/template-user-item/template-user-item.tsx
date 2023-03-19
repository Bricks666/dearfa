import MessageIcon from '@mui/icons-material/Message';
import {
	Avatar,
	IconButton,
	ListItem,
	ListItemAvatar,
	ListItemSecondaryAction,
	ListItemText,
	Typography
} from '@mui/material';
import { Link } from 'atomic-router-react';
import * as React from 'react';
import { User } from '@/shared/api';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';

import styles from './template-user-item.module.css';

export interface TemplateUserItemProps
	extends CommonProps,
		Omit<User, 'followed' | 'uniqueUrlName'> {
	readonly actions?: null | React.ReactElement;
}

export const TemplateUserItem: React.FC<TemplateUserItemProps> = (props) => {
	const { id, name, photos, status, className, actions, } = props;

	return (
		<ListItem className={className}>
			<ListItemAvatar>
				<Avatar
					src={photos.small}
					to={routes.profile}
					params={{ id, }}
					component={Link}
				/>
			</ListItemAvatar>
			<ListItemText
				primary={
					<Typography component='h3'>
						<Link className={styles.link} to={routes.profile} params={{ id, }}>
							{name}
						</Link>
					</Typography>
				}
				secondary={status}
			/>
			<ListItemSecondaryAction>
				<IconButton to={routes.dialogs} params={{ id, }} component={Link}>
					<MessageIcon />
				</IconButton>
				{actions}
			</ListItemSecondaryAction>
		</ListItem>
	);
};
