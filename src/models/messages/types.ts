import { DateType } from '@/types';

export interface Message {
	readonly id: number;
	readonly body: string;
	readonly senderName: string;
	readonly senderId: number;
	readonly addedAt: DateType;
	readonly viewed: boolean;
}
