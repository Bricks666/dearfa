import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGate, useUnit } from 'effector-react';
import {
	CircularProgress,
	Container,
	LinearProgress,
	Stack,
} from '@mui/material';
import { routes } from '@/routes';
import { AuthGate, authQuery } from '@/models/auth';
import { Header } from '@/components/Header';

import styles from './App.module.css';

export const App: React.FC = () => {
	const status = useUnit(authQuery.$status);
	const isAuthorizing = status === 'initial' || status === 'pending';
	useGate(AuthGate);

	return (
		<Stack spacing={isAuthorizing ? 0 : 4} alignItems='center'>
			<Header className={styles.header} />
			{isAuthorizing ? (
				<LinearProgress color='secondary' />
			) : (
				<Container maxWidth='xl'>
					<Routes>
						{routes.map(({ Component, path }) => (
							<Route
								path={path}
								element={
									<React.Suspense key={path} fallback={<CircularProgress />}>
										<Component className={styles.main} />
									</React.Suspense>
								}
								key={path}
							/>
						))}
					</Routes>
				</Container>
			)}
		</Stack>
	);
};
