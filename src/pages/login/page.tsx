import { Alert, AlertTitle } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { Header } from '@/widgets/page';
import { LoginForm } from '@/features/auth';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import styles from './page.module.css';
import './model';

const LoginPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	return (
		<MainLayout className={cn(styles.layout, className)} header={<Header />}>
			<Alert className={styles.alert} variant='outlined' color='info'>
				<AlertTitle>Аккаунт</AlertTitle>
				Аккаунты управляются со стороны, я не могу вас регистрировать. Если у
				вас нет аккаунта, вы можете использовать бесплатный с логином{' '}
				<b>free@samuraijs.com</b> и паролем <b>free</b>. Либо перейти по ссылке
				и зарегистрировать свой аккаунт
			</Alert>
			<LoginForm className={styles.form} />
		</MainLayout>
	);
};

export default LoginPage;
