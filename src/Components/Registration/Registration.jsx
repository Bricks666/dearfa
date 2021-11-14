import React from "react";

import { SectionHeader } from "../Shared";

import { RegistrationForm } from "./RegistrationForm";

import RegistrationStyle from "./Registration.module.css";

const Registration = ({ className, onSubmit }) => {
	return (
		<main className={`${className ?? ""} ${RegistrationStyle.main}`}>
			<SectionHeader className={RegistrationStyle.header}>
				Регистрация
			</SectionHeader>
			<RegistrationForm onSubmit={onSubmit} />
		</main>
	);
};

export { Registration };
