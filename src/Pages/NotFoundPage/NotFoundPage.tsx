import classNames from "classnames";
import React, { FC } from "react";
import { SectionHeader } from "../../Components/Shared";
import { IOnlyClassComponent } from "../../Types/Common";

import NotFoundPageStyle from "./NotFoundPage.module.css";

export const NotFoundPage: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(NotFoundPageStyle.main, className)}>
			<SectionHeader>Страница не найдена</SectionHeader>
		</main>
	);
};
