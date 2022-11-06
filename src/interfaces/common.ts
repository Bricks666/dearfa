import { SyntheticEvent } from 'react';

export type URL = string;

export type EmptyObject = Record<string, never>;

export interface Photos {
	readonly large: URL | null;
	readonly small: URL | null;
}

export type DateType = string;

export type EventHandler<Element, EventType> = (
	event?: SyntheticEvent<Element, EventType>
) => void | Promise<void>;

export type TypedObject<V> = {
	readonly [key: string]: V;
};

export type ID = number | string;
