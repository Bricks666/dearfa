import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import { RouterProvider } from 'atomic-router-react';
import { App } from '@/app';
import { router } from '@/models/routing';
import '@/models/init';

import './index.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<StyledEngineProvider injectFirst>
				<App />
			</StyledEngineProvider>
		</RouterProvider>
	</React.StrictMode>
);
