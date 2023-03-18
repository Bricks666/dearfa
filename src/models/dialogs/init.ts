import { sample } from 'effector';
import { dialogsApi } from '@/shared/api';
import { getDialogsQuery } from './queries';
import { DialogsGate, getDialogsFx } from './units';

getDialogsFx.use(dialogsApi.getAll);

sample({
	clock: DialogsGate.open,
	target: getDialogsQuery.start,
});
