import * as React from 'react';
import { useGate, useUnit } from 'effector-react';
import {
	CircularProgress,
	Container,
	LinearProgress,
	Stack,
} from '@mui/material';
import { AuthGate, authQuery } from '@/models/auth';
import { Header } from '@/components/Header';
import { AppRoutes } from '@/components/AppRoutes';
import { Popups } from '@/components/Popups';

import styles from './App.module.css';

export const App: React.FC = () => {
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
};
