import React, { FC } from "react";
import classNames from "classnames";
import { useLogin } from "../../Hooks";
import { IOnlyClassComponent } from "../../Types/Common";
import { LoginForm } from "../../Components/LoginForm";
import { SectionHeader } from "../../Components/Shared";

import LoginPageStyle from "./LoginPage.module.css";

export const LoginPage: FC<IOnlyClassComponent> = ({ className }) => {
	const { login: onSubmit } = useLogin();

	return (
		<main className={classNames(LoginPageStyle.main, className)}>
			<SectionHeader className={LoginPageStyle.header}>Вход</SectionHeader>
			<LoginForm className={LoginPageStyle.form} onSubmit={onSubmit} />
		</main>
	);
};
