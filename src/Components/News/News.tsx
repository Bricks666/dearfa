import React, { FC } from "react";
import { IOnlyClassComponent } from "../../Types/Common";

import { SectionHeader, CreatedPostsList } from "../Shared";

export const News: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
			<CreatedPostsList />
		</main>
	);
};
