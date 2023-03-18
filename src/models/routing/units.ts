import { createDomain } from 'effector';

const RoutingDomain = createDomain();

export const $popup = RoutingDomain.store<string>('');

export const closePopup = RoutingDomain.event<string>();
export const closeUpdateInfoPopup = RoutingDomain.event();
export const closeUpdateStatusPopup = RoutingDomain.event();
export const closeUpdatePhotoPopup = RoutingDomain.event();
