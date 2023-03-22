import { CircularProgress } from '@mui/material';
import { useGate, useUnit } from 'effector-react';
import * as React from 'react';
import { pageModel } from '@/entities/app';
import { Pages } from '@/pages';
import { authUserModel } from '@/entities/auth-user';
import styles from './app.module.css';
import { WithProviders } from './providers';
import '@/processes/auth';

export const App = WithProviders(() => {
	const status = useUnit(authUserModel.query.$status);
	const isAuthorizing = status === 'initial' || status === 'pending';
	useGate(pageModel.Gate);

	return isAuthorizing ? (
		<div className={styles.wrapper}>
			<CircularProgress color='secondary' size={60} />
		</div>
	) : (
		<React.Suspense
			fallback={
				<div className={styles.wrapper}>
					<CircularProgress color='secondary' size={60} />
				</div>
			}>
			<Pages />
		</React.Suspense>
	);
});
