import { createMutation, update } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { createPopupControlModel } from '@/entities/popups';
import { profileStatusModel } from '@/entities/profile';
import {
	getStandardServerResponse,
	profileApi,
	UpdateStatusParams
} from '@/shared/api';
import { POPUP_NAMES } from '@/shared/configs';
import { RTEmptyObject } from '@/shared/types';

const updateStatus = createDomain();

const handlerFx = updateStatus.effect(profileApi.updateStatus);

export const popup = createPopupControlModel(POPUP_NAMES.updateStatus);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(RTEmptyObject)),
});

export const form = createForm<UpdateStatusParams>({
	fields: {
		status: {
			init: '',
		},
	},
});

sample({
	clock: form.formValidated,
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: popup.close,
});

sample({
	clock: popup.close,
	target: form.reset,
});

sample({
	clock: [popup.opened, profileStatusModel.query.finished.success],
	source: profileStatusModel.query.$data,
	filter: popup.$isOpen,
	fn: (status) => ({ status: status ?? '', }),
	target: form.setForm,
});

update(profileStatusModel.query, {
	on: mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					refresh: true,
					result: '',
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refresh: true,
				};
			}

			return {
				result: mutation.params.status,
				refetch: false,
			};
		},
	},
});
