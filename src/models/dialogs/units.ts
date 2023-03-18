import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import { Dialog } from './types';

const DialogsDomain = createDomain();

export const getDialogsFx = DialogsDomain.effect<void, Dialog[]>();

export const DialogsGate = createGate({
	domain: DialogsDomain,
});
