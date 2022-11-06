import * as React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CommonProps } from '@/types';
import { PagesList } from './PagesList';

export interface PaginationProps extends CommonProps {
	readonly pageCount: number;
}

export const PagesListWithRouting: React.FC<PaginationProps> = React.memo(
	(props) => {
		const { className, pageCount } = props;
		const { page } = useParams();
		const { pathname } = useLocation();
		const currentPage = typeof page === 'undefined' ? 1 : +page;
		const rootPath = pathname.replace(':page', '');
		return (
			<PagesList
				className={className}
				currentPage={currentPage}
				rootPath={rootPath}
				pageCount={+pageCount}
			/>
		);
	}
);
