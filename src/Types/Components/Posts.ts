import { IFormInner } from ".";
import { FormSubmitHandler } from "../Common";

type FormValues = {
	message: string;
};

export type MakePostHandler = FormSubmitHandler<FormValues>;

export type MakePostFormComponent = IFormInner<FormValues>;
