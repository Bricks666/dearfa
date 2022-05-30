import React, { FC } from "react";
import classNames from "classnames";
/* import { Field as ReactField, Form as ReactForm } from "react-final-form"; */
/* import { FORM_ERROR } from "final-form"; */
import { Button, Field, ErrorMessage } from "../Shared";
/* import {
	IRegistrationComponent,
	RegistrationFormComponent,
	RegistrationValidation,
	RegistrationValidationError,
} from "../../types/Components"; */

import RegistrationFormStyle from "./RegistrationForm.module.css";

const Form: FC = (/* {
	handleSubmit,
	className,
	error,
	valid,
	submitting,
} */) => {
	return null;
	/* 		<form
			className={classNames(RegistrationFormStyle.form, className)}
			onSubmit={handleSubmit}
		>
			<ReactField name="name" render={Field}>
				Имя
			</ReactField>
			<ReactField name="email" type="email" render={Field}>
				Почта
			</ReactField>
			{error && (
				<ErrorMessage className={RegistrationFormStyle.error}>
					{error}
				</ErrorMessage>
			)}
			<ReactField name="password" type="password" render={Field}>
				Пароль
			</ReactField>
			<ReactField name="passwordAgain" type="password" render={Field}>
				Повторите пароль
			</ReactField>
			<Button
				className={RegistrationFormStyle.button}
				disabled={valid === false || submitting}
			>
				Зарегистрироваться
			</Button>
		</form> */
};
/*
const validate: RegistrationValidation = ({
	email,
	name,
	password,
	passwordAgain,
}) => {
	const errors: RegistrationValidationError = {};
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
}; */

const RegistrationForm: FC /* <IRegistrationComponent> */ = (/* {
	onSubmit,
	className,
} */) => {
	return null;
	/* 		<ReactForm
			className={className}
			onSubmit={onSubmit}
			validate={validate}
			render={Form}
		/> */
};

export { RegistrationForm };
