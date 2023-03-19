import { CircularProgress } from '@mui/material';
import { useGate, useUnit } from 'effector-react';
import * as React from 'react';
import { Pages } from '@/pages';
import { WithProviders } from './providers';
import { Popups } from '@/components/Popups';
import { AuthGate, authQuery } from '@/models/auth';

export const App = WithProviders(() => {
	const status = useUnit(authQuery.$status);
	const isAuthorizing = status === 'initial' || status === 'pending';
	useGate(AuthGate);

	return isAuthorizing ? (
		<CircularProgress color='secondary' />
	) : (
		<React.Suspense fallback={<CircularProgress />}>
			<Pages />
			<Popups />
		</React.Suspense>
	);
});
