import React, { FC } from "react";
import { SectionHeader } from "@/components/Shared";
import { CreatedPostsList } from "@/components/CreatedPostsList";
import { StandardProps } from "@/interfaces/components";

export const NewsPage: FC<StandardProps> = ({ className }) => {
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
			<CreatedPostsList />
		</main>
	);
};
