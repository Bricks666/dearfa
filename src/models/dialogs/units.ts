/* eslint-disable import/no-extraneous-dependencies */
import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { StandardServerResponse } from '@/types';
import { Dialog } from './types';

const DialogsDomain = createDomain();

export const getDialogsFx = DialogsDomain.effect<
	void,
	StandardServerResponse<Dialog[]>
>();

export const DialogsGate = createGate({
	domain: DialogsDomain,
});
