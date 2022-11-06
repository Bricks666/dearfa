import * as React from 'react';
import { useUnit } from 'effector-react';
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { $isAuth } from '@/models/auth';
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
								to='/login'
								component={Link}
								variant='text'
								color='inherit'>
								Войти
							</Button>
							/
							<Button
								to='/registration'
								component={Link}
								variant='text'
								color='inherit'>
								Зарегистрироваться
							</Button>
						</>
					)}
				</div>
			</Toolbar>
		</AppBar>
	);
});
