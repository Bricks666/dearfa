import { createHistoryRouter, createRouterControls } from 'atomic-router';
import { createBrowserHistory } from 'history';
import { routes } from './routes';

export const controls = createRouterControls();

const router = createHistoryRouter({
	routes,
	controls,
});

const history = createBrowserHistory();

router.setHistory(history);

export { router };
