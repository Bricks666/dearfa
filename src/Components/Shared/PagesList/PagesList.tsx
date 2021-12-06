import React from "react";

import { renderPagesList } from "./renderPagesList";
import { ButtonLink } from "../Buttons/ButtonLink/ButtonLink";

import PagesListStyle from "./PagesList.module.css";

export const PagesList = ({ currentPage, rootPath, pageCount }) => {
	const pages = renderPagesList(rootPath, currentPage, pageCount, {
		pageNumber: PagesListStyle.pageNumber,
		selected: PagesListStyle.selected,
		link: PagesListStyle.link,
	});

	if (pages.length === 0) {
		return "";
	}

	return (
		<ul className={PagesListStyle.pagesList}>
			<ButtonLink className={PagesListStyle.button} to={rootPath + 1}>
				Первая
			</ButtonLink>
			{pages}
			<ButtonLink className={PagesListStyle.button} to={rootPath + pageCount}>
				Последняя
			</ButtonLink>
		</ul>
	);
};
