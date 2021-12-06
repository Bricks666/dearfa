import React, { useCallback } from "react";

import { SectionHeader } from "../Shared";
import { RegistrationForm } from "./RegistrationForm";
import classNames from "classnames";

import RegistrationStyle from "./Registration.module.css";

const Registration = ({ className }) => {
	const onSubmit = useCallback((...data) => console.log(data), []);
	return (
		<main className={classNames(RegistrationStyle.main, className)}>
			<SectionHeader className={RegistrationStyle.header}>
				Регистрация
			</SectionHeader>
			<RegistrationForm onSubmit={onSubmit} />
		</main>
	);
};

export { Registration };
