import React, { FC } from "react";

import { useParams, useLocation } from "react-router";
import { IOnlyClassComponent } from "../../../Types/Common";
import { PagesList } from "./PagesList";

interface IPagesListWithRouting extends IOnlyClassComponent {
	pageCount: number;
}

export const PagesListWithRouting: FC<IPagesListWithRouting> = ({
	className,
	pageCount,
}) => {
	const { page } = useParams<"page">();
	const { pathname } = useLocation();
	const currentPage = typeof page === "undefined" ? 1 : +page;
	const rootPath = pathname.replace(":page", "");
	return (
		<PagesList
			className={className}
			currentPage={currentPage}
			rootPath={rootPath}
			pageCount={+pageCount}
		/>
	);
};
