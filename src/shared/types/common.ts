import { Record, Static, String } from 'runtypes';

export const RTUrl = String.nullable();

export type URL = Static<typeof RTUrl>;

export const RTEmptyObject = Record({});

export interface EmptyObject extends Static<typeof RTEmptyObject> {}

export const RTPhotos = Record({
	large: RTUrl,
	small: RTUrl,
}).asReadonly();

export interface Photos extends Static<typeof RTPhotos> {}

export const RTDateType = String;

export type DateType = Static<typeof RTDateType>;

export type ID = number | string;

export type VoidFunction = () => void;
