import classNames from "classnames";
import React, { FC } from "react";

import { Field as ReactField, Form as ReactForm } from "react-final-form";
import {
	IOnlyClassComponent,
	IFormInner,
	FormSubmitHandler,
	ValidationErrors,
} from "../../Types/Common";
import { Field, Checkbox, Button, ErrorMessage } from "../Shared";

import LoginFormStyle from "./LoginForm.module.css";

type FormValues = {
	email: string;
	password: string;
};

type Validate = (data: FormValues) => ValidationErrors<FormValues>;

interface ILoginForm extends IOnlyClassComponent {
	onSubmit: FormSubmitHandler<FormValues>;
}

const Form: FC<IFormInner<FormValues>> = ({
	className,
	handleSubmit,
	error,
	submitError,
}) => {
	const haveError = !!(error || submitError);
	const errorText: string = error || submitError;

	return (
		<form
			className={classNames(LoginFormStyle.form, className)}
			onSubmit={handleSubmit}
		>
			{haveError && (
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
			</ReactField>
			<Button className={LoginFormStyle.button}>Войти</Button>
		</form>
	);
};

const validate: Validate = ({ email, password }) => {
	const errors: ValidationErrors<FormValues> = {};

	if (email === undefined) {
		errors.email = "Email is require field";
	}
	if (password === undefined) {
		errors.password = "Password is require field";
	}

	return errors;
};

export const LoginForm: FC<ILoginForm> = ({ className, onSubmit }) => {
	return (
		<ReactForm<FormValues>
			className={className}
			onSubmit={onSubmit}
			validate={validate}
			render={Form}
		/>
	);
};
