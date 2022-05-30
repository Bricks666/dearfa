import React, { FC, useCallback } from "react";
import classNames from "classnames";
import { SectionHeader } from "@/components/Shared";
import { RegistrationForm } from "@/components/RegistrationForm";
import { StandardProps } from "@/interfaces/components";

import RegistrationPageStyle from "./RegistrationPage.module.css";

const RegistrationPage: FC<StandardProps> = ({ className }) => {
	const onSubmit = useCallback((...data: unknown[]) => console.log(data), []);
	return (
		<main className={classNames(RegistrationPageStyle.main, className)}>
			<SectionHeader className={RegistrationPageStyle.header}>
				Регистрация
			</SectionHeader>
			<RegistrationForm /* onSubmit={onSubmit} */ />
		</main>
	);
};

export { RegistrationPage };
