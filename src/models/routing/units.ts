/* eslint-disable import/no-extraneous-dependencies */
import { createDomain } from 'effector-logger';

const RoutingDomain = createDomain();

export const $popup = RoutingDomain.store<string>('');

export const closePopup = RoutingDomain.event<string>();
export const closeUpdateInfoPopup = RoutingDomain.event();
