import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import { Message } from './types';
import { CreateMessageParams, GetMessageParams } from '@/api/messages';
import { ResponseWithItems, StandardServerResponse } from '@/types';

const MessagesDomain = createDomain();

export const getMessagesFx = MessagesDomain.effect<
	GetMessageParams,
	ResponseWithItems<Message>
>();

export const createMessageFx = MessagesDomain.effect<
	CreateMessageParams,
	StandardServerResponse<Message>
>();

export const MessagesGate = createGate<GetMessageParams>({
	domain: MessagesDomain,
});
