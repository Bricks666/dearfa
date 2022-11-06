import React, { FC, useMemo, useRef } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { To, Link } from 'react-router-dom';
import { AccountCircleOutlined } from '@mui/icons-material';
import { useToggle, useTypedDispatch, useTypedSelector } from '@/hooks';
import { StandardProps } from '@/interfaces/components';
import { logoutThunk, selectAuthId } from '@/models/auth';

interface MenuOption {
	readonly label: string;
	readonly to?: To;
	readonly onClick?: VoidFunction;
}

export const ProfileMenu: FC<StandardProps> = ({ className }) => {
	const { onToggle, toggled } = useToggle();
	const anchor = useRef(null);
	const authId = useTypedSelector(selectAuthId);
	const dispatch = useTypedDispatch();
	const menuOptions: MenuOption[] = useMemo(
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
				onClick: () => dispatch(logoutThunk()),
			},
		],
		[dispatch, authId]
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
