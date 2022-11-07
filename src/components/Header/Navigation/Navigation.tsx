import * as React from 'react';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Stack,
} from '@mui/material';
import {
	AccountCircle,
	Menu,
	Forum,
	Group,
	Article,
	ImportContacts,
} from '@mui/icons-material';
import { RouteInstance } from 'atomic-router';
import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import { $authUser } from '@/models/auth';
import { CommonProps } from '@/types';
import { useToggle } from '@/hooks';
import { Logo } from '../Logo';

import styles from './Navigation.module.css';
import {
	dialogsRoute,
	friendsRoute,
	newsRoute,
	profileRoute,
	usersRoute,
} from '@/routes';

interface NavigationItem {
	readonly to: RouteInstance<any>;
	readonly params?: object;
	readonly label: string;
	readonly icon?: React.ReactNode;
}

export const Navigation: React.FC<CommonProps> = (props) => {
	const { className } = props;
	const { id: authId } = useUnit($authUser)!;
	const { toggled, onToggle } = useToggle();
	const navigationItems: NavigationItem[] = React.useMemo(
		() => [
			{
				to: profileRoute,
				params: { id: authId },
				label: 'Профиль',
				icon: <AccountCircle />,
			},
			{
				to: dialogsRoute,
				label: 'Сообщения',
				icon: <Forum />,
			},
			{
				to: friendsRoute,
				params: {
					page: 1,
				},
				label: 'Друзья',
				icon: <ImportContacts />,
			},
			{
				to: newsRoute,
				label: 'Новости',
				icon: <Article />,
			},
			{
				to: usersRoute,
				params: {
					page: 1,
				},
				label: 'Пользователи',
				icon: <Group />,
			},
		],
		[authId]
	);
	return (
		<>
			<IconButton onClick={onToggle} color='inherit'>
				<Menu color='inherit' />
			</IconButton>
			<Drawer
				className={className}
				open={toggled}
				onClose={onToggle}
				anchor='left'>
				<Stack onClick={onToggle}>
					<Logo src='/Images/logo.svg' alt='Logo' />
					<List className={styles.list}>
						{navigationItems.map(({ to, label, icon, params }) => (
							<ListItem key={label} disablePadding>
								<ListItemButton component={Link} to={to} params={params}>
									<ListItemAvatar>{icon}</ListItemAvatar>
									<ListItemText>{label}</ListItemText>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Stack>
			</Drawer>
		</>
	);
};
