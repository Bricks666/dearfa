import React from "react";

import classNames from "classnames";
import { SectionHeader } from "../Shared";
import { LoginForm } from "./LoginForm";
import { useLogin } from "../../Hooks";

import LoginStyle from "./Login.module.css";

export const Login = ({ className }) => {
	const { login: onSubmit } = useLogin();
	return (
		<main className={classNames(LoginStyle.main, className)}>
			<SectionHeader className={LoginStyle.header}>Вход</SectionHeader>
			<LoginForm onSubmit={onSubmit} className={LoginStyle.form} />
		</main>
	);
};
