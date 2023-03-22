import { AccountCircleOutlined } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { logoutModel } from '@/features/auth';
import { authUserModel } from '@/entities/auth-user';
import { useToggle } from '@/shared/lib';
import { CommonProps, VoidFunction } from '@/shared/types';

interface MenuOption {
	readonly label: string;
	readonly to?: any;
	readonly onClick?: VoidFunction;
}

export const ProfileMenu: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;
	const { onToggle, toggled, } = useToggle();
	const anchor = React.useRef(null);
	const authId = useUnit(authUserModel.$id);
	const logout = useUnit(logoutModel.mutation.start);
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
				onClick: logout,
			}
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
				{menuOptions.map(({ label, onClick, to, }) =>
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
});
