import { sample } from 'effector';
import { dialogsApi } from '@/api';
import { DialogsGate, getDialogsFx } from './units';
import { getDialogsQuery } from './queries';

getDialogsFx.use(dialogsApi.getAll);

sample({
	clock: DialogsGate.open,
	target: getDialogsQuery.start,
});
