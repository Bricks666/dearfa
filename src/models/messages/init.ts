import { sample } from 'effector';
import { messagesApi } from '@/api';
import { createMessageMutation, getMessagesQuery } from './queries';
import { getMessagesFx, MessagesGate } from './units';

getMessagesFx.use(messagesApi.getAll);

sample({
	clock: MessagesGate.state,
	target: getMessagesQuery.start,
});

sample({
	clock: createMessageMutation.finished.success,
	source: getMessagesQuery.$data,
	fn: (messages, { data }) => {
		return [...(messages ?? []), data.data];
	},
	target: getMessagesQuery.$data,
});
