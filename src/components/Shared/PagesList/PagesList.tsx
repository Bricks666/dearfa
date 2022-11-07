import * as React from 'react';
import { renderPagesList } from './renderPagesList';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { CommonProps } from '@/types';

import styles from './PagesList.module.css';

interface PaginationProps extends CommonProps {
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
		pageNumber: styles.pageNumber,
		selected: styles.selected,
		link: styles.link,
	});

	if (pages.length === 0) {
		return null;
	}

	return (
		<ul className={styles.pagesList}>
			<ButtonLink className={styles.button} to={rootPath + 1}>
				Первая
			</ButtonLink>
			{pages}
			<ButtonLink className={styles.button} to={rootPath + pageCount}>
				Последняя
			</ButtonLink>
		</ul>
	);
};
