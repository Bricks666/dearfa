import * as React from 'react';
import { useUnit } from 'effector-react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'atomic-router-react';
import { $isAuth } from '@/models/auth';
import { loginRoute, registrationRoute } from '@/routes';
import { CommonProps } from '@/types';
import { Logo } from './Logo';
import { ProfileMenu } from './ProfileMenu';
import { Navigation } from './Navigation';

import styles from './Header.module.css';

export const Header: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const isAuth = useUnit($isAuth);

	return (
		<AppBar className={className} position='static'>
			<Toolbar>
				<Typography className='visibility-hidden' variant='h1'>
					Dear.Fa
				</Typography>
				{isAuth && <Navigation />}
				<Logo className={styles.logo} src='/Images/logo.svg' alt='Logo' />
				<div className={styles.authorization}>
					{isAuth ? (
						<ProfileMenu />
					) : (
						<>
							<Button
								variant='text'
								color='inherit'
								to={loginRoute}
								component={Link}>
								Войти
							</Button>
							/
							<Button
								variant='text'
								color='inherit'
								to={registrationRoute}
								component={Link}>
								Зарегистрироваться
							</Button>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
});
