import * as React from 'react';
import { useUnit } from 'effector-react';
import { router } from '@/routes';
import { CommonProps } from '@/types';
import { PagesList } from './PagesList';

export interface PaginationProps extends CommonProps {
	readonly pageCount: number;
}

export const PagesListWithRouting: React.FC<PaginationProps> = React.memo(
	(props) => {
		const { className, pageCount } = props;
		const pathname = useUnit(router.$path);
		const currentPage = typeof 0 === 'undefined' ? 1 : +0;
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
