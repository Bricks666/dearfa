import React, { FC, Suspense, useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	CircularProgress,
	Container,
	LinearProgress,
	Stack,
} from '@mui/material';
import { Header } from '@/components/Header';
import { routes } from '@/routes';
import { authThunk, selectAuthorization } from '@/models/auth';
import { useTypedDispatch, useTypedSelector } from '@/hooks';

import AppStyle from './App.module.css';

export const App: FC = () => {
	const isAuthorizing = useTypedSelector(selectAuthorization);
	const dispatch = useTypedDispatch();
	const auth = useCallback(() => {
		dispatch(authThunk());
	}, [dispatch]);

	useEffect(() => {
		auth();
	}, [auth]);

	return (
		<Stack spacing={isAuthorizing ? 0 : 4} alignItems='center'>
			<Header className={AppStyle.header} />
			{isAuthorizing ? (
				<LinearProgress color='secondary' />
			) : (
				<Container maxWidth='xl'>
					<Routes>
						{routes.map(({ Component, path }) => (
							<Route
								path={path}
								element={
									<Suspense key={path} fallback={<CircularProgress />}>
										<Component className={AppStyle.main} />
									</Suspense>
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
