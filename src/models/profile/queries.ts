import { createMutation, createQuery } from '@farfetched/core';
import {
	getInfoFx,
	getStatusFx,
	updateInfoFx,
	updatePhotoFx,
	updateStatusFx
} from './units';

export const getInfoQuery = createQuery({
	effect: getInfoFx,
});

export const getStatusQuery = createQuery({
	effect: getStatusFx,
});

export const updateStatusMutation = createMutation({
	effect: updateStatusFx,
});

export const updateInfoMutation = createMutation({
	effect: updateInfoFx,
});

export const updatePhotoMutation = createMutation({
	effect: updatePhotoFx,
});
