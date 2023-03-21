import { createMutation, update } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { createPopupControlModel } from '@/entities/popups';
import { profileInfoModel } from '@/entities/profile';
import {
	getStandardServerResponse,
	profileApi,
	RTUpdatePhotoResponse,
	UpdatePhotoParams
} from '@/shared/api';
import { POPUP_NAMES } from '@/shared/configs';

const updatePhoto = createDomain();

const handlerFx = updatePhoto.effect(profileApi.updatePhoto);

export const popup = createPopupControlModel(POPUP_NAMES.updatePhoto);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(RTUpdatePhotoResponse)),
});

export const form = createForm<{ photo: FileList | null }>({
	fields: {
		photo: {
			init: null,
		},
	},
});

sample({
	clock: form.formValidated,
	filter: (values): values is UpdatePhotoParams => Boolean(values.photo),
	target: mutation.start,
});

sample({
	clock: mutation.finished.success,
	target: popup.close,
});

sample({
	clock: popup.closed,
	target: form.reset,
});

update(profileInfoModel.query, {
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
				result: {
					...query.result,
					photos: mutation.result.data.photos,
				},
				refetch: false,
			};
		},
	},
});
