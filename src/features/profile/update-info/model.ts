import { createMutation, update } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { createPopupControlModel } from '@/entities/popups';
import { profileInfoModel } from '@/entities/profile';
import {
	getStandardServerResponse,
	profileApi,
	UpdateInfoParams
} from '@/shared/api';
import { POPUP_NAMES } from '@/shared/configs';
import { RTEmptyObject } from '@/shared/types';

const updateInfo = createDomain();

const handlerFx = updateInfo.effect(profileApi.updateInfo);

export const popup = createPopupControlModel(POPUP_NAMES.updateInfo);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(RTEmptyObject)),
});

export const form = createForm<UpdateInfoParams>({
	fields: {
		aboutMe: {
			init: '',
		},
		contacts: {
			init: {
				facebook: null,
				github: null,
				instagram: null,
				mainLink: null,
				twitter: null,
				vk: null,
				website: null,
				youtube: null,
			},
		},
		fullName: { init: '', },
		lookingForAJob: { init: false, },
		lookingForAJobDescription: { init: '', },
	},
	domain: updateInfo,
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
	clock: [popup.opened, profileInfoModel.query.finished.success],
	source: profileInfoModel.query.$data,
	filter: popup.$isOpen,
	target: form.setForm,
});

update(profileInfoModel.query, {
	on: mutation,
	by: {
		success: ({ query, mutation, }) => {
			if (!query) {
				return {
					refresh: true,
					result: null as any,
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refresh: true,
				};
			}

			return {
				result: { ...query.result, ...mutation.params, },
				refetch: false,
			};
		},
	},
});
