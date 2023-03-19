import { update } from '@farfetched/core';
import { createEvent, createStore, sample } from 'effector';
import { debug } from 'patronum';
import { upDialogModel } from '@/features/dialgos';
import { createMessageModel } from '@/features/messages';
import { dialogsModel } from '@/entities/dialogs';
import { Dialog } from '@/shared/api';
import { $id, currentRoute, paramsAndQueryLoaded } from './page';

sample({
	clock: [currentRoute.opened, paramsAndQueryLoaded],
	target: dialogsModel.query.start,
});

sample({
	clock: createMessageModel.mutation.finished.success,
	target: dialogsModel.query.refresh,
});

update(dialogsModel.query, {
	on: createMessageModel.mutation,
	by: {
		success: ({ query, }) => {
			if (!query) {
				return {
					result: [],
					refetch: true,
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refetch: true,
				};
			}

			return {
				result: query.result,
				refetch: true,
			};
		},
	},
});

/*
Может быть можно упростить
*/

export const $activeDialog = createStore<Dialog | null>(null);
const foundDialog = createEvent<Dialog | null>();
const activateDialogChange = createEvent();

sample({
	clock: $id.updates,
	filter: Boolean,
	target: activateDialogChange,
});

sample({
	clock: [activateDialogChange, dialogsModel.query.$data],
	source: {
		dialogs: dialogsModel.query.$data,
		id: $id,
	},
	fn: ({ dialogs, id, }) => {
		return dialogs.find((dialog) => dialog.id === Number(id)) ?? null;
	},
	target: foundDialog,
});

sample({
	clock: foundDialog,
	filter: Boolean,
	target: $activeDialog,
});

sample({
	clock: foundDialog,
	source: $id,
	filter: (_id, dialog) => !dialog,
	fn: (id) => {
		return {
			userId: Number(id),
		};
	},
	target: upDialogModel.mutation.start,
});

update(dialogsModel.query, {
	on: upDialogModel.mutation,
	by: {
		success: ({ query, }) => {
			if (!query) {
				return {
					result: [],
					refetch: true,
				};
			}

			if ('error' in query) {
				return {
					error: query.error,
					refetch: true,
				};
			}

			return {
				result: query.result,
				refetch: true,
			};
		},
	},
});

debug(dialogsModel.query.$data);
