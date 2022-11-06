import React, { FC } from 'react';
import { SectionHeader } from '@/components/Shared';
import { CreatedPostsList } from '@/components/CreatedPostsList';
import { CommonProps } from '@/types';

export const NewsPage: FC<CommonProps> = ({ className }) => {
	return (
		<main className={className}>
			<SectionHeader>Новости</SectionHeader>
			<CreatedPostsList />
		</main>
	);
};
