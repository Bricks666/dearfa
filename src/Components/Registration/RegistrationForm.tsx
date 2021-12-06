import React from "react";
import { Field as ReactField, Form as ReactForm } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { Button, Field, ErrorMessage } from "../Shared";
import classNames from "classnames";

import RegistrationFormStyle from "./RegistrationForm.module.css";

const Form = ({ handleSubmit, className, error, valid, submitting }) => {
	return (
		<form
			className={classNames(RegistrationFormStyle.form, className)}
			onSubmit={handleSubmit}
		>
			<ReactField name="name" component={Field}>
				Имя
			</ReactField>
			<ReactField name="email" type="email" component={Field}>
				Почта
			</ReactField>
			{error && (
				<ErrorMessage className={RegistrationFormStyle.error}>
					{error}
				</ErrorMessage>
			)}
			<ReactField name="password" type="password" component={Field}>
				Пароль
			</ReactField>
			<ReactField name="passwordAgain" type="password" component={Field}>
				Повторите пароль
			</ReactField>
			<Button
				className={RegistrationFormStyle.button}
				disabled={valid === false || submitting}
			>
				Зарегистрироваться
			</Button>
		</form>
	);
};

const validate = ({ email, name, password, passwordAgain }) => {
	const errors = {};
	if (name === undefined) {
		errors.name = "Имя это обязательное поле";
	}
	if (email === undefined) {
		errors.email = "Почта это обязательное поле";
	}
	if (password === undefined) {
		errors.password = "Пароль не введен";
	}
	if (passwordAgain === undefined) {
		errors.passwordAgain = "Повторите пароль";
	}
	if (
		password !== passwordAgain &&
		password !== undefined &&
		passwordAgain !== undefined
	) {
		errors[FORM_ERROR] = "Пароли не совпадают";
	}

	return errors;
};

const RegistrationForm = ({ onSubmit, className }) => {
	return (
		<ReactForm
			className={className}
			onSubmit={onSubmit}
			validate={validate}
			render={Form}
		/>
	);
};

export { RegistrationForm };
