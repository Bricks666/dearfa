import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { LoginForm } from '@/components/LoginForm';
import { CommonProps } from '@/types';

import styles from './LoginPage.module.css';

export const LoginPage: FC<CommonProps> = ({ className }) => {
	console.debug('Page');

	return (
		<Stack className={className} component='main'>
			<Typography variant='h2' align='center'>
				Вход
			</Typography>
			<LoginForm className={styles.form} />
		</Stack>
	);
};
