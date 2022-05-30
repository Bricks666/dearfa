/* import { IFormInner, IOnlyClassComponent, ValidationErrors } from "..";
import { FormSubmitHandler } from "../../Common";
 */
export type FormValues = {
	email: string;
	password: string;
	remember: boolean;
};

/* export type LoginFormValidate = (
	data: FormValues
) => ValidationErrors<FormValues>;

export interface ILoginComponent extends IOnlyClassComponent {
	onSubmit: FormSubmitHandler<FormValues>;
}

export type LoginFormValidationErrors = ValidationErrors<FormValues>;

export type LoginFormComponent = IFormInner<FormValues>;
 */
