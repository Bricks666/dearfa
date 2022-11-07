import {
	createHistoryRouter,
	createRouterControls,
	redirect,
} from 'atomic-router';
import { createBrowserHistory } from 'history';
import { newsRoute, routes } from './routes';

export const controls = createRouterControls();

const router = createHistoryRouter({
	routes,
	controls,
});

const history = createBrowserHistory();

router.setHistory(history);
redirect({
	clock: router.routeNotFound,
	route: newsRoute,
});
router.routeNotFound.watch(console.debug);
router.$activeRoutes.watch(console.debug);
export { router };
