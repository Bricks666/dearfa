import { Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { MainLayout } from '@/shared/ui';
import { pageModel } from './models';
import styles from './page.module.css';
import { Chat, DialogsList } from './ui';
import { Header } from '@/components/Header';

const DialogsPage: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;

	return (
		<MainLayout className={cn(styles.dialogs, className)} header={<Header />}>
			<Typography className={styles.heading} variant='h4' component='h2'>
				Диалоги
			</Typography>
			<DialogsList className={styles.list} />
			<Chat className={styles.chat} />
		</MainLayout>
	);
});

pageModel.loaded();

export default DialogsPage;
