import React, { FC } from "react";
import classNames from "classnames";
import { useSignin } from "../../Hooks";
import { IOnlyClassComponent } from "../../Types/Common";
import { LoginForm } from "../../Components/LoginForm";
import { SectionHeader } from "../../Components/Shared";

import LoginPageStyle from "./LoginPage.module.css";

export const LoginPage: FC<IOnlyClassComponent> = ({ className }) => {
	const { signin } = useSignin();

	return (
		<main className={classNames(LoginPageStyle.main, className)}>
			<SectionHeader className={LoginPageStyle.header}>Вход</SectionHeader>
			<LoginForm className={LoginPageStyle.form} onSubmit={signin} />
		</main>
	);
};
