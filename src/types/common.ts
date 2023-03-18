import { Record, Static, String } from 'runtypes';

export const url = String.nullable();

export type URL = Static<typeof url>;

export const emptyObject = Record({});

export interface EmptyObject extends Static<typeof emptyObject> {}

export const photos = Record({
	large: url,
	small: url,
}).asReadonly();

export interface Photos extends Static<typeof photos> {}

export const dateType = String.nullable();

export type DateType = Static<typeof dateType>;

export type ID = number | string;

export type VoidFunction = () => void;
