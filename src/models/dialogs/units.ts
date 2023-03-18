import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import { Dialog, StandardServerResponse } from '@/shared/api';

const DialogsDomain = createDomain();

export const getDialogsFx = DialogsDomain.effect<
	void,
	StandardServerResponse<Dialog[]>
>();

export const DialogsGate = createGate({
	domain: DialogsDomain,
});
