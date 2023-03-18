import { Typography } from '@mui/material';
import cn from 'classnames';
import { useGate } from 'effector-react';
import * as React from 'react';
import { routes } from '@/shared/configs';
import styles from './page.module.css';
import { Chat } from '@/components/Chat';
import { DialogsList } from '@/components/DialogsList';
import { EmptyChat } from '@/components/EmptyChat';

import { useParam } from '@/hooks';
import { DialogsGate } from '@/models/dialogs';
import { CommonProps } from '@/types';

const DialogsPage: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;
	const id = useParam(routes.dialogs, 'id');
	useGate(DialogsGate);

	return (
		<main className={cn(styles.dialogs, className)}>
			<Typography className={styles.heading} variant='h4' component='h2'>
				Диалоги
			</Typography>
			<DialogsList className={styles.dialogList} />
			{id !== null ? (
				<Chat className={styles.chat} />
			) : (
				<EmptyChat className={styles.chat} />
			)}
		</main>
	);
});

export default DialogsPage;
