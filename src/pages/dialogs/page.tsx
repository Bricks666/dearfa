import { Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { pageLoadModel } from './models';
import styles from './page.module.css';
import { DialogsList } from './ui';
import { Chat } from '@/components/Chat';
import { EmptyChat } from '@/components/EmptyChat';

import { useParam } from '@/hooks';

const DialogsPage: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;
	const id = useParam(routes.dialogs, 'id');

	return (
		<main className={cn(styles.dialogs, className)}>
			<Typography className={styles.heading} variant='h4' component='h2'>
				Диалоги
			</Typography>
			<DialogsList className={styles.list} />
			{id !== null ? (
				<Chat className={styles.chat} />
			) : (
				<EmptyChat className={styles.chat} />
			)}
		</main>
	);
});

pageLoadModel.loaded();

export default DialogsPage;
