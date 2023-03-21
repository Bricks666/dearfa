import { cache, createQuery, Query } from '@farfetched/core';
import { runtypeContract } from '@farfetched/runtypes';
import { createDomain } from 'effector';
import { GetProfileParams, Info, profileApi, TInfo } from '@/shared/api';

const info = createDomain();

const handlerFx = info.effect(profileApi.getInfo);

export const query = createQuery({
	initialData: {
		aboutMe: '',
		contacts: {
			github: '',
			facebook: '',
			vk: '',
			twitter: '',
			mainLink: '',
			website: '',
			youtube: '',
			instagram: '',
		},
		fullName: '',
		lookingForAJob: false,
		lookingForAJobDescription: '',
		photos: {
			large: '',
			small: '',
		},
		userId: -1,
	},
	effect: handlerFx,
	contract: runtypeContract(TInfo),
}) as Query<GetProfileParams, Info, Error, Info>;

cache(query);
