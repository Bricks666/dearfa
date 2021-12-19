import { FormSubmitHandler } from "../Common";

export type UseSignin = () => IUseSigninResponse;

/* TODO: Нужно избавиться от дублирования с теми данными, что в форме */
interface ILoginFormData {
	email: string;
	password: string;
	remember: boolean;
}

type Signin = FormSubmitHandler<ILoginFormData>;

interface IUseSigninResponse {
	signin: Signin;
}
