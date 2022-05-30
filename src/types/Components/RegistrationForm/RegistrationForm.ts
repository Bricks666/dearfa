/* import {
	FormValidateHandler,
	IFormInner,
	IOnlyClassComponent,
	ValidationErrors,
} from "..";
import { FormSubmitHandler } from "../../Common";
 */
export type FormValues = {
	email: string;
	name: string;
	password: string;
	passwordAgain: string;
};

/* export interface IRegistrationComponent extends IOnlyClassComponent {
	onSubmit: FormSubmitHandler<FormValues>;
}

export type RegistrationFormComponent = IFormInner<FormValues>;

export type RegistrationValidation = FormValidateHandler<FormValues>;

export type RegistrationValidationError = ValidationErrors<FormValues>;
 */
