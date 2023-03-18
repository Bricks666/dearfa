import { createDomain } from 'effector';
import { createGate } from 'effector-react';
import {
	GetMessageParams,
	ResponseWithItems,
	CreateMessageParams,
	StandardServerResponse,
	Message
} from '@/shared/api';

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
