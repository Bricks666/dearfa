export type URL = string;

export type EmptyObject = Record<string, never>;

export interface Photos {
	readonly large: URL | null;
	readonly small: URL | null;
}

export type DateType = string;

export type ID = number | string;
