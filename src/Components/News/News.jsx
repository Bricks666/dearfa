import React from "react";

import { SectionHeader, CreatedPostsListConnect } from "../Shared";

export const News = ({ className }) => {
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
			<CreatedPostsListConnect />
		</main>
	);
};
