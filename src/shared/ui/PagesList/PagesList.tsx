import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import styles from './PagesList.module.css';
import { renderPagesList } from './renderPagesList';

interface PaginationProps extends CommonProps {
	currentPage: number;
	rootPath: string;
	pageCount: number;
}

export const PagesList: React.FC<PaginationProps> = (props) => {
	const { currentPage, rootPath, pageCount, } = props;
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
