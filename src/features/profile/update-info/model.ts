import { createMutation } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain, sample } from 'effector';
import { createForm } from 'effector-forms';
import { debug } from 'patronum';
import { createPopupControlModel } from '@/entities/popups';
import {
	getStandardServerResponse,
	profileApi,
	UpdateInfoParams
} from '@/shared/api';
import { POPUP_NAMES } from '@/shared/configs';
import { emptyObject } from '@/shared/types';

const updateInfo = createDomain();

const handlerFx = updateInfo.effect(profileApi.updateInfo);

export const popup = createPopupControlModel(POPUP_NAMES.updateInfo);

export const mutation = createMutation({
	effect: handlerFx,
	contract: runtypeContract(getStandardServerResponse(emptyObject)),
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

debug(form.fields.lookingForAJob.$value);
