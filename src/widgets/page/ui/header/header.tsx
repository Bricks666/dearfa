import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import {
	AppBar,
	Button,
	IconButton,
	Toolbar,
	Tooltip,
	Typography
} from '@mui/material';
import { RouteInstance } from 'atomic-router';
import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { logoutModel } from '@/features/auth';
import { Navigation } from '@/features/page';
import { authUserModel } from '@/entities/auth-user';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import styles from './header.module.css';

export const Header: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;
	const isAuth = useUnit(authUserModel.$isAuth);
	const authId = useUnit(authUserModel.$id);
	const logout = useUnit(logoutModel.mutation);

	return (
		<AppBar className={className} position='static' variant='outlined'>
			<Toolbar>
				<Typography className='visibility-hidden' variant='h1'>
					Dear.Fa
				</Typography>
				{isAuth && <Navigation />}
				<Link className={styles.logo} to={routes.news}>
					<img src='/images/logo.svg' alt='Logo' />
				</Link>
				<div className={styles.authorization}>
					{isAuth ? (
						<>
							<Tooltip title='Профиль'>
								<IconButton
									to={routes.profile as RouteInstance<any>}
									params={{ id: authId, }}
									color='inherit'
									component={Link}>
									<AccountCircleOutlinedIcon />
								</IconButton>
							</Tooltip>
							<Tooltip title='Выйти'>
								<IconButton onClick={logout.start} color='inherit'>
									<LogoutIcon />
								</IconButton>
							</Tooltip>
						</>
					) : (
						<>
							<Button
								variant='text'
								color='inherit'
								to={routes.login}
								component={Link}>
								Войти
							</Button>
							/
							<Button
								variant='text'
								color='inherit'
								href='https://social-network.samuraijs.com/signUp'
								target='_blank'>
								Зарегистрироваться
							</Button>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
});
