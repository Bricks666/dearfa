import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { PagesList } from './PagesList';

export interface PaginationProps extends CommonProps {
	readonly pageCount: number;
}

export const PagesListWithRouting: React.FC<PaginationProps> = React.memo(
	(props) => {
		const { className, pageCount, } = props;
		const currentPage = typeof 0 === 'undefined' ? 1 : +0;
		const rootPath = ''.replace(':page', '');
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
