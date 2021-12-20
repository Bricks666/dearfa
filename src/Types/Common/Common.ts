import { FormApi, SubmissionErrors } from "final-form";
import { SyntheticEvent } from "react";

export type URL = string;
export type URLorNull = URL | null;

export type EmptyObject = Record<string, never>;

export interface IPhotos {
	large: URLorNull;
	small: URLorNull;
}

export type DateType = string;

export type EventHandler<Element, EventType> = (
	event?: SyntheticEvent<Element, EventType>
) => void | Promise<void>;

export type TypedObject<V> = {
	[key: string]: V;
};

export type ID = number | string;

export type FormSubmitHandler<T> = (
	formValues: T,
	formApi?: FormApi<T, Partial<T>>,
	errorsCallback?: (errors?: SubmissionErrors) => void
) => void;
