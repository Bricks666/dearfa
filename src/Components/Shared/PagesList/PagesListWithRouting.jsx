import React from "react";

import { useParams, useRouteMatch } from "react-router";
import { PagesList } from "./PagesList";

export const PagesListWithRouting = ({ className, pageCount }) => {
	const { page } = useParams();
	const { path } = useRouteMatch();
	return (
		<PagesList
			className={className}
			currentPage={+page}
			rootPath={path.replace(":page", "")}
			pageCount={+pageCount}
		/>
	);
};
