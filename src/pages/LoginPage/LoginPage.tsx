import React, { FC } from "react";
import classNames from "classnames";
import { LoginForm } from "@/components/LoginForm";
import { SectionHeader } from "@/components/Shared";
import { StandardProps } from "@/interfaces/components";

import LoginPageStyle from "./LoginPage.module.css";

export const LoginPage: FC<StandardProps> = ({ className }) => {
	return (
		<main className={classNames(LoginPageStyle.main, className)}>
			<SectionHeader className={LoginPageStyle.header}>Вход</SectionHeader>
			<LoginForm /* className={LoginPageStyle.form} onSubmit={signin} */ />
		</main>
	);
};
