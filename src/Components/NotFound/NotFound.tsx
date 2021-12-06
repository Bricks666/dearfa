import classNames from "classnames";
import React from "react";

import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";

import NotFoundStyle from "./NotFound.module.css";

export const NotFound = ({ className }) => {
	return (
		<main className={classNames(NotFoundStyle.main, className)}>
			<SectionHeader>Страница не найдена</SectionHeader>
		</main>
	);
};
