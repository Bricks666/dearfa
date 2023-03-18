import { RouterProvider } from 'atomic-router-react';
import * as React from 'react';
import { router } from '@/models/routing';

export const WithRouter = (
	Component: React.ComponentType
): React.ComponentType => {
	return () => {
		return (
			<RouterProvider router={router}>
				<Component />
			</RouterProvider>
		);
	};
};
