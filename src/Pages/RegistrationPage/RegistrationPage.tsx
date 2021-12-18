import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { SectionHeader } from "../../Components/Shared";
import { RegistrationForm } from "../../Components/RegistrationForm";
import { IOnlyClassComponent } from "../../Types/Common";

import RegistrationPageStyle from "./RegistrationPage.module.css";

const RegistrationPage: FC<IOnlyClassComponent> = ({ className }) => {
	const onSubmit = useCallback((...data) => console.log(data), []);
	return (
		<main className={classNames(RegistrationPageStyle.main, className)}>
			<SectionHeader className={RegistrationPageStyle.header}>
				Регистрация
			</SectionHeader>
			<RegistrationForm onSubmit={onSubmit} />
		</main>
	);
};

export { RegistrationPage };
