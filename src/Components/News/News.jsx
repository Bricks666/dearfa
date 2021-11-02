import React from "react";

import { CreatedPostsListContainer } from "../Shared/CreatedPostsListContainer/CreatedPostsListContainer";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";

export const News = (props) => {
	return (
		<main className={props.className}>
			<SectionHeader>Новости</SectionHeader>
			<CreatedPostsListContainer />
		</main>
	);
};
