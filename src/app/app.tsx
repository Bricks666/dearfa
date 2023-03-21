import { CircularProgress } from '@mui/material';
import { useGate, useUnit } from 'effector-react';
import * as React from 'react';
import { pageModel } from '@/entities/app';
import { Pages } from '@/pages';
import { authUserModel } from '@/entities/auth-user';
import { WithProviders } from './providers';
import '@/processes/auth';

export const App = WithProviders(() => {
	const status = useUnit(authUserModel.query.$status);
	const isAuthorizing = status === 'initial' || status === 'pending';
	useGate(pageModel.Gate);

	return isAuthorizing ? (
		<CircularProgress color='secondary' />
	) : (
		<React.Suspense fallback={<CircularProgress />}>
			<Pages />
		</React.Suspense>
	);
});
