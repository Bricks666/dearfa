import {
	CircularProgress,
	Container,
	LinearProgress,
	Stack
} from '@mui/material';
import { useGate, useUnit } from 'effector-react';
import * as React from 'react';

import styles from './app.module.css';
import { WithProviders } from './providers';
import { AppRoutes } from '@/components/AppRoutes';
import { Header } from '@/components/Header';
import { Popups } from '@/components/Popups';
import { AuthGate, authQuery } from '@/models/auth';

export const App = WithProviders(() => {
	const status = useUnit(authQuery.$status);
	const isAuthorizing = status === 'initial' || status === 'pending';
	useGate(AuthGate);

	return (
		<Stack spacing={isAuthorizing ? 0 : 2} alignItems='center'>
			<Header className={styles.header} />
			{isAuthorizing ? (
				<LinearProgress color='secondary' />
			) : (
				<Container maxWidth='xl'>
					<React.Suspense fallback={<CircularProgress />}>
						<AppRoutes className={styles.main} />
						<Popups />
					</React.Suspense>
				</Container>
			)}
		</Stack>
	);
});
