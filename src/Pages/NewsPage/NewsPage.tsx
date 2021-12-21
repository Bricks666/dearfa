import React, { FC } from "react";
import { SectionHeader } from "../../Components/Shared";
import { CreatedPostsList } from "../../Components/CreatedPostsList";
import { IOnlyClassComponent } from "../../Types/Components";

export const NewsPage: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
			<CreatedPostsList />
		</main>
	);
};
