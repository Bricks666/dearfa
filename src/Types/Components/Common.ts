import { FORM_ERROR } from "final-form";
import { FormRenderProps } from "react-final-form";

export interface IOnlyClassComponent {
	className?: string;
}

export interface IFormInner<V>
	extends IOnlyClassComponent,
		FormRenderProps<V> {}

export type ValidationErrors<T> = Partial<T & { [FORM_ERROR]: string }>;

export type FormValidateHandler<T> = (values: T) => ValidationErrors<T>;
