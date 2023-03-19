import { sample } from 'effector';
import { dialogsModel } from '@/entities/dialogs';
import { pageLoadModel } from './page';

sample({
	clock: [
		pageLoadModel.currentRoute.opened,
		pageLoadModel.paramsAndQueryLoaded
	],
	target: dialogsModel.query.start,
});
