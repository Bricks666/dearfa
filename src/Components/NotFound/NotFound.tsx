import classNames from "classnames";
import React, { FC } from "react";
import { IOnlyClassComponent } from "../../Types/Common";

import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";

import NotFoundStyle from "./NotFound.module.css";

export const NotFound: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(NotFoundStyle.main, className)}>
			<SectionHeader>Страница не найдена</SectionHeader>
		</main>
	);
};
