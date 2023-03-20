import {
	AccountCircle,
	Menu,
	Forum,
	Group,
	Article,
	ImportContacts
} from '@mui/icons-material';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Stack
} from '@mui/material';
import { RouteInstance } from 'atomic-router';
import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { authUserModel } from '@/entities/auth-user';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { Logo } from '../Logo';
import styles from './Navigation.module.css';
import { useToggle } from '@/hooks';

interface NavigationItem {
	readonly to: RouteInstance<any>;
	readonly params?: object;
	readonly label: string;
	readonly icon?: React.ReactNode;
}

export const Navigation: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const { id: authId, } = useUnit(authUserModel.$user)!;
	const { toggled, onToggle, } = useToggle();
	const navigationItems: NavigationItem[] = React.useMemo(
		() => [
			{
				to: routes.profile,
				params: { id: authId, },
				label: 'Профиль',
				icon: <AccountCircle />,
			},
			{
				to: routes.dialogs,
				label: 'Сообщения',
				icon: <Forum />,
			},
			{
				to: routes.friends,
				params: {
					page: 1,
				},
				label: 'Друзья',
				icon: <ImportContacts />,
			},
			{
				to: routes.news,
				label: 'Новости',
				icon: <Article />,
			},
			{
				to: routes.users,
				params: {
					page: 1,
				},
				label: 'Пользователи',
				icon: <Group />,
			}
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
					<Logo src='/images/logo.svg' alt='Logo' />
					<List className={styles.list}>
						{navigationItems.map(({ to, label, icon, params, }) => (
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
