import React, { FC } from "react";
import { CreatedPostsList, SectionHeader } from "../../Components/Shared";
import { IOnlyClassComponent } from "../../Types/Common";

export const NewsPage: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
			<CreatedPostsList />
		</main>
	);
};
