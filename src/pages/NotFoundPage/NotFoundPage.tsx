import React, { FC } from "react";
import classNames from "classnames";
import { SectionHeader } from "@/components/Shared";
import { StandardProps } from "@/interfaces/components";

import NotFoundPageStyle from "./NotFoundPage.module.css";

export const NotFoundPage: FC<StandardProps> = ({ className }) => {
	return (
		<main className={classNames(NotFoundPageStyle.main, className)}>
			<SectionHeader>Страница не найдена</SectionHeader>
		</main>
	);
};
