import {
	CircularProgress,
	Container,
	LinearProgress,
	Stack
} from '@mui/material';
import { useGate, useUnit } from 'effector-react';
import * as React from 'react';
import { Pages } from '@/pages';

import styles from './app.module.css';
import { WithProviders } from './providers';
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
						<Pages />
						<Popups />
					</React.Suspense>
				</Container>
			)}
		</Stack>
	);
});
