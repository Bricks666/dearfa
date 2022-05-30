import classNames from "classnames";
import React, { FC } from "react";
/* import {
	ILoginComponent,
	LoginFormComponent,
	LoginFormValidate,
	LoginFormValidationErrors,
} from "../../types/Components"; */
import { Field, Checkbox, Button, ErrorMessage } from "../Shared";

import LoginFormStyle from "./LoginForm.module.css";

const Form: FC = () => {
	/* 	const haveError = !!(error || submitError);
	const errorText: string = error || submitError;
 */
	return (
		<form
		/* 			className={classNames(LoginFormStyle.form, className)}
			onSubmit={handleSubmit} */
		>
			{/* 			{haveError && (
				<ErrorMessage className={LoginFormStyle.error}>
					{errorText}
				</ErrorMessage>
			)}
			<ReactField
				className={LoginFormStyle.field}
				name="email"
				render={Field}
				type="email"
			>
				Почта
			</ReactField>
			<ReactField
				className={LoginFormStyle.field}
				name="password"
				render={Field}
				type="password"
			>
				Пароль
			</ReactField>
			<ReactField name="remember" render={Checkbox} type="checkbox">
				Запомнить меня
			</ReactField> */}
			<Button className={LoginFormStyle.button}>Войти</Button>
		</form>
	);
};

/* const validate: LoginFormValidate = ({ email, password }) => {
	const errors: LoginFormValidationErrors = {};

	if (email === undefined) {
		errors.email = "Email is require field";
	}
	if (password === undefined) {
		errors.password = "Password is require field";
	}

	return errors;
}; */

/**TODO: Переписать форму */
export const LoginForm: FC = () => {
	return null;
	/* 		<ReactForm
			className={className}
			onSubmit={onSubmit}
			validate={validate}
			render={Form}
		/> */ null;
};
