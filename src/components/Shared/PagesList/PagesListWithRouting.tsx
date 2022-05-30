import { StandardProps } from "@/interfaces/components";
import React, { FC } from "react";
import { useParams, useLocation } from "react-router";
import { PagesList } from "./PagesList";

interface PaginationProps extends StandardProps {
	readonly pageCount: number;
}

export const PagesListWithRouting: FC<PaginationProps> = ({
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
