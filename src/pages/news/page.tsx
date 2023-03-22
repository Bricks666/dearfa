import { Typography } from '@mui/material';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import { PostsList } from './ui';
import { Header } from '@/components/Header';

const NewsPage: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	return (
		<MainLayout className={className} header={<Header />}>
			<Typography variant='h4' align='center' component='h2'>
				Новости
			</Typography>
			<PostsList />
		</MainLayout>
	);
};

pageModel.loaded();

export default NewsPage;
