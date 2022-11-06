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
	MusicNote,
	ImportContacts,
	Settings,
} from '@mui/icons-material';
import { useUnit } from 'effector-react';
import { NavLink, To } from 'react-router-dom';
import { $authUser } from '@/models/auth';
import { CommonProps } from '@/types';
import { useToggle } from '@/hooks';
import { Logo } from '../Logo';

import styles from './Navigation.module.css';

interface NavigationItem {
	readonly to: To;
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
				to: `/profile/${authId}`,
				label: 'Профиль',
				icon: <AccountCircle />,
			},
			{
				to: '/dialogs',
				label: 'Сообщения',
				icon: <Forum />,
			},
			{
				to: '/friends/1',
				label: 'Друзья',
				icon: <ImportContacts />,
			},
			{
				to: '/news',
				label: 'Новости',
				icon: <Article />,
			},
			{
				to: '/music',
				label: 'Музыка',
				icon: <MusicNote />,
			},
			{
				to: '/users/1',
				label: 'Пользователи',
				icon: <Group />,
			},
			{
				to: '/settings',
				label: 'Настройки',
				icon: <Settings />,
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
						{navigationItems.map(({ to, label, icon }) => (
							<ListItem key={label} disablePadding>
								<ListItemButton component={NavLink} to={to}>
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
