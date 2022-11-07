import * as React from 'react';
import { SectionHeader } from '@/ui';
import { CommonProps } from '@/types';

export const NewsPage: React.FC<CommonProps> = (props) => {
	const { className } = props;
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
		</main>
	);
};
