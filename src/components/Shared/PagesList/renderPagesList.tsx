import { TypedObject } from "@/interfaces/common";
import classNames from "classnames";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

type RenderPagesList = (
	rootPath: string,
	currentPage: number,
	pageCount: number,
	styles: TypedObject<string>
) => ReactElement[];

export const renderPagesList: RenderPagesList = (
	rootPath,
	currentPage,
	pageCount,
	styles
) => {
	const pages = [];
	const start = currentPage - 5;
	const end =
		start > 0 ? Math.min(currentPage + 5, pageCount) : Math.min(10, pageCount);

	for (let i = start > 0 ? start : 1; i <= end; i++) {
		pages.push(
			<li
				key={i}
				className={classNames(styles.pageNumber, {
					[styles.selected]: i === currentPage,
				})}
			>
				<Link className={styles.link} to={rootPath + i}>
					{i}
				</Link>
			</li>
		);
	}

	return pages;
};
