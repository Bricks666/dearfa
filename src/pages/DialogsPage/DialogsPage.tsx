import * as React from 'react';
import cn from 'classnames';
import { useGate } from 'effector-react';
import { DialogsGate } from '@/models/dialogs';
import { CommonProps } from '@/types';
import { useParam } from '@/hooks';
import { dialogsRoute } from '@/routes';
import { SectionHeader } from '@/ui';
import { DialogsList } from '@/components/DialogsList';
import { Chat } from '@/components/Chat';
import { EmptyChat } from '@/components/EmptyChat';

import styles from './DialogsPage.module.css';

export const DialogsPage: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const id = useParam(dialogsRoute, 'id');
	useGate(DialogsGate);

	return (
		<main className={cn(styles.dialogs, className)}>
			<SectionHeader className={styles.heading}>Диалоги</SectionHeader>
			<DialogsList className={styles.dialogList} />
			{id !== null ? (
				<Chat className={styles.chat} />
			) : (
				<EmptyChat className={styles.chat} />
			)}
		</main>
	);
});
