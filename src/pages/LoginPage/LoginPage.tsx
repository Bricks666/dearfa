import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { CommonProps } from '@/types';
import { LoginForm } from '@/components/LoginForm';

import styles from './LoginPage.module.css';

export const LoginPage: React.FC<CommonProps> = (props) => {
	const { className } = props;
	return (
		<Stack className={className} component='main'>
			<Typography variant='h2' align='center'>
				Вход
			</Typography>
			<LoginForm className={styles.form} />
		</Stack>
	);
};
