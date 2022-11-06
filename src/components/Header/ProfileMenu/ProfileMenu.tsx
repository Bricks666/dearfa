import * as React from 'react';
import { To, Link } from 'react-router-dom';
import { useUnit } from 'effector-react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircleOutlined } from '@mui/icons-material';
import { $authUser, logoutMutation } from '@/models/auth';
import { useToggle } from '@/hooks';
import { CommonProps } from '@/types';

interface MenuOption {
	readonly label: string;
	readonly to?: To;
	readonly onClick?: VoidFunction;
}

export const ProfileMenu: React.FC<CommonProps> = (props) => {
	const { className } = props;
	const { onToggle, toggled } = useToggle();
	const anchor = React.useRef(null);
	const { id: authId } = useUnit($authUser)!;
	const menuOptions: MenuOption[] = React.useMemo(
		() => [
			{
				label: 'Профиль',
				to: `/profile/${authId}`,
			},
			{
				label: 'Настройки',
				to: '/settings',
			},
			{
				label: 'Выйти',
				onClick: logoutMutation.start,
			},
		],
		[authId]
	);
	return (
		<>
			<IconButton
				className={className}
				onClick={onToggle}
				ref={anchor}
				color='inherit'>
				<AccountCircleOutlined />
			</IconButton>
			<Menu open={toggled} anchorEl={anchor.current} onClose={onToggle}>
				{menuOptions.map(({ label, onClick, to }) =>
					to ? (
						<MenuItem key={label} component={Link} to={to}>
							{label}
						</MenuItem>
					) : (
						<MenuItem key={label} onClick={onClick}>
							{label}
						</MenuItem>
					)
				)}
			</Menu>
		</>
	);
};
