import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import styles from './LoginPage.module.css';
import { LoginForm } from '@/components/LoginForm';
import { CommonProps } from '@/types';

const LoginPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<Stack className={className} component='main'>
			<Typography variant='h2' align='center'>
				Вход
			</Typography>
			<LoginForm className={styles.form} />
		</Stack>
	);
};

export default LoginPage;
