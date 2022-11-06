import React, { FC } from 'react';
import { renderPagesList } from './renderPagesList';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { StandardProps } from '@/interfaces/components';

import PagesListStyle from './PagesList.module.css';

interface PaginationProps extends StandardProps {
	currentPage: number;
	rootPath: string;
	pageCount: number;
}

export const PagesList: FC<PaginationProps> = ({
	currentPage,
	rootPath,
	pageCount,
}) => {
	const pages = renderPagesList(rootPath, currentPage, pageCount, {
		pageNumber: PagesListStyle.pageNumber,
		selected: PagesListStyle.selected,
		link: PagesListStyle.link,
	});

	if (pages.length === 0) {
		return null;
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
