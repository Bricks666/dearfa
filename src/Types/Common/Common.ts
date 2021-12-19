import { FormApi, SubmissionErrors, FORM_ERROR } from "final-form";
import { PropsWithChildren, ReactElement, SyntheticEvent } from "react";
import { FormRenderProps } from "react-final-form";

export type URL = string;
export type URLorNull = URL | null;

export type EmptyObject = Record<string, never>;

export interface IOnlyClassComponent {
	className?: string;
}

export interface IPhotos {
	large: URLorNull;
	small: URLorNull;
}

export type DateType = string;

export type EventHandler<Element, EventType> = (
	event?: SyntheticEvent<Element, EventType>
) => void | Promise<void>;

export type ButtonType = "submit" | "reset" | "button";

export type TypedObject<V> = {
	[key: string]: V;
};

export type ID = number | string;

export type FormSubmitHandler<T> = (
	formValues: T,
	formApi?: FormApi<T, Partial<T>>,
	errorsCallback?: (errors?: SubmissionErrors) => void
) => void;

export interface IFormInner<V>
	extends IOnlyClassComponent,
		FormRenderProps<V> {}

export type ValidationErrors<T> = Partial<T & { [FORM_ERROR]: string }>;

export type FormValidateHandler<T> = (values: T) => ValidationErrors<T>;
