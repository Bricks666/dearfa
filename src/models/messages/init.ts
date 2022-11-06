import { sample } from 'effector';
import { createMessageMutation, getMessagesQuery } from './queries';
import { MessagesGate } from './units';

sample({
	clock: MessagesGate.open,
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
