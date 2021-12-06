import classNames from "classnames";
import React from "react";

import { Field as ReactField, Form as ReactForm } from "react-final-form";
import { Field, Checkbox, Button, ErrorMessage } from "../Shared";

import LoginFormStyle from "./LoginForm.module.css";

const Form = ({ className, handleSubmit, error, submitError }) => {
	return (
		<form
			className={classNames(LoginFormStyle.form, className)}
			onSubmit={handleSubmit}
		>
			{(error || submitError) && (
				<ErrorMessage className={LoginFormStyle.error}>
					{error || submitError}
				</ErrorMessage>
			)}
			<ReactField
				className={LoginFormStyle.field}
				name="email"
				component={Field}
				type="email"
			>
				Почта
			</ReactField>
			<ReactField
				className={LoginFormStyle.field}
				name="password"
				component={Field}
				type="password"
			>
				Пароль
			</ReactField>
			<ReactField name="remember" component={Checkbox} type="checkbox">
				Запомнить меня
			</ReactField>
			<Button className={LoginFormStyle.button}>Войти</Button>
		</form>
	);
};

const validate = ({ email, password }) => {
	const errors = {};

	if (email === undefined) {
		errors.email = "Email is require field";
	}
	if (password === undefined) {
		errors.password = "Password is require field";
	}

	return errors;
};

export const LoginForm = ({ className, onSubmit }) => {
	return (
		<ReactForm
			className={className}
			onSubmit={onSubmit}
			validate={validate}
			render={Form}
		/>
	);
};
