import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { SectionHeader } from '@/shared/ui';

const NewsPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
		</main>
	);
};

export default NewsPage;
