import * as React from 'react';
import cn from 'classnames';
import { Link } from 'atomic-router-react';

type RenderPagesList = (
	rootPath: string,
	currentPage: number,
	pageCount: number,
	styles: Record<string, string>
) => React.ReactElement[];

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

	for (let i = start > 0 ? start : 1; i <= end; i += 1) {
		pages.push(
			<li
				key={i}
				className={cn(styles.pageNumber, {
					[styles.selected]: i === currentPage,
				})}>
				<Link className={styles.link} to={rootPath + i}>
					{i}
				</Link>
			</li>
		);
	}

	return pages;
};
