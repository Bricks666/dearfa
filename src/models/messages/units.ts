/* eslint-disable import/no-extraneous-dependencies */
import { createDomain } from 'effector-logger';
import { createGate } from 'effector-react';
import { CreateMessageParams, GetMessageParams } from '@/api/messages';
import { ResponseWithItems, StandardServerResponse } from '@/types';
import { Message } from './types';

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
