import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { LoginForm } from '@/components/LoginForm';
import { StandardProps } from '@/interfaces/components';

import LoginPageStyle from './LoginPage.module.css';

export const LoginPage: FC<StandardProps> = ({ className }) => {
	return (
		<Stack className={className} component='main'>
			<Typography variant='h2' align='center'>
				Вход
			</Typography>
			<LoginForm className={LoginPageStyle.form} />
		</Stack>
	);
};
