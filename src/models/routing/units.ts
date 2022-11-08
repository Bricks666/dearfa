/* eslint-disable import/no-extraneous-dependencies */
import { createDomain } from 'effector-logger';
import { createRouterControls, createHistoryRouter } from 'atomic-router';
import { routes } from '@/routes';

const RoutingDomain = createDomain();

export const controls = createRouterControls();

export const router = createHistoryRouter({
	routes,
	controls,
});

export const $popup = RoutingDomain.store<string>('');

export const closePopup = RoutingDomain.event<string>();
export const closeUpdateInfoPopup = RoutingDomain.event();
export const closeUpdateStatusPopup = RoutingDomain.event();
export const closeUpdatePhotoPopup = RoutingDomain.event();
