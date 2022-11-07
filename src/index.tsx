import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { createInspector } from 'effector-inspector';
import { RouterProvider } from 'atomic-router-react';
import { App } from '@/app';
import { router } from '@/routes';
import '@/models/init';

import './index.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);

if (import.meta.env.DEV) {
	createInspector({});
}
