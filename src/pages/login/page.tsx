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
			<LoginForm className={styles.form} />
		</MainLayout>
	);
};

export default LoginPage;
