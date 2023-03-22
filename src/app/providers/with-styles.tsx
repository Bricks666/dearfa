import { StyledEngineProvider } from '@mui/material';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import * as React from 'react';

export const WithStyles = (
	Component: React.ComponentType
): React.ComponentType => {
	return () => {
		return (
			<CssVarsProvider>
				<StyledEngineProvider injectFirst>
					<Component />
				</StyledEngineProvider>
			</CssVarsProvider>
		);
	};
};
