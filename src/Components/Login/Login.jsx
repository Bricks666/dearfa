import React from "react";

import { SectionHeader } from "../Shared";
import { LoginForm } from "./LoginForm";

import LoginStyle from "./Login.module.css";

export const Login = ({ className, onSubmit }) => {
	return (
		<main className={`${className} ${LoginStyle.main}`}>
			<SectionHeader className={LoginStyle.header}>Вход</SectionHeader>
			<LoginForm onSubmit={onSubmit} className={LoginStyle.form} />
		</main>
	);
};
