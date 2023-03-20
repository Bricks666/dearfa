import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { authUserModel } from '@/entities/auth-user';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import styles from './Header.module.css';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { ProfileMenu } from './ProfileMenu';

export const Header: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;
	const isAuth = useUnit(authUserModel.$isAuth);

	return (
		<AppBar className={className} position='static' variant='outlined'>
			<Toolbar>
				<Typography className='visibility-hidden' variant='h1'>
					Dear.Fa
				</Typography>
				{isAuth && <Navigation />}
				<Logo className={styles.logo} src='/images/logo.svg' alt='Logo' />
				<div className={styles.authorization}>
					{isAuth ? (
						<ProfileMenu />
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
