import React, { FC } from "react";

import classNames from "classnames";
import { SectionHeader } from "../Shared";
import { LoginForm } from "./LoginForm";
import { useLogin } from "../../Hooks";

import LoginStyle from "./Login.module.css";
import { IOnlyClassComponent } from "../../Types/Common";

export const Login: FC<IOnlyClassComponent> = ({ className }) => {
	const { login: onSubmit } = useLogin();
	return (
		<main className={classNames(LoginStyle.main, className)}>
			<SectionHeader className={LoginStyle.header}>Вход</SectionHeader>
			<LoginForm className={LoginStyle.form} onSubmit={onSubmit} />
		</main>
	);
};
