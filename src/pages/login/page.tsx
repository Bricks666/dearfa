import { Typography } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import styles from './LoginPage.module.css';
import { Header } from '@/components/Header';
import { LoginForm } from '@/components/LoginForm';

const LoginPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<MainLayout className={className} header={<Header />}>
			<Typography variant='h4' align='center' component='h4'>
				Вход
			</Typography>
			<LoginForm className={styles.form} />
		</MainLayout>
	);
};

export default LoginPage;
