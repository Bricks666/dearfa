import { StyledEngineProvider } from '@mui/material';
import * as React from 'react';

export const WithStyles = (
	Component: React.ComponentType
): React.ComponentType => {
	return () => {
		return (
			<StyledEngineProvider injectFirst>
				<Component />
			</StyledEngineProvider>
		);
	};
};
