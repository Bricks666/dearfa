import React from "react";

import { SectionHeader, CreatedPostsList } from "../Shared";

export const News = ({ className }) => {
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
			<CreatedPostsList />
		</main>
	);
};
