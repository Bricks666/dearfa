import { Photos, DateType } from '@/types';

export interface Dialog {
	readonly userName: string;
	readonly id: number;
	readonly photos: Photos;
	readonly lastUserActivityDate: DateType;
}
