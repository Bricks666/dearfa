import React, { FC, ReactNode, useMemo } from 'react';
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
import { NavLink, To } from 'react-router-dom';
import { StandardProps } from '@/interfaces/components';
import { useToggle, useTypedSelector } from '@/hooks';
import { Logo } from '../Logo';

import NavigationStyle from './Navigation.module.css';
import { selectAuthId } from '@/models/auth';

interface NavigationItem {
	readonly to: To;
	readonly label: string;
	readonly icon?: ReactNode;
}

export const Navigation: FC<StandardProps> = ({ className }) => {
	const authId = useTypedSelector(selectAuthId);
	const { toggled, onToggle } = useToggle();
	const navigationItems: NavigationItem[] = useMemo(
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
			<Drawer open={toggled} onClose={onToggle} anchor='left'>
				<Stack onClick={onToggle}>
					<Logo src='/Images/logo.svg' alt='Logo' />
					<List className={NavigationStyle.list}>
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
