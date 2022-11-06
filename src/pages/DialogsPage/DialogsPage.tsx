import * as React from 'react';
import cn from 'classnames';
import { useGate } from 'effector-react';
import { Route, Routes } from 'react-router-dom';
import { DialogsGate } from '@/models/dialogs';
import { CommonProps } from '@/types';
import { SectionHeader } from '@/components/Shared';
import { DialogsList } from '@/components/DialogsList';
import { Chat } from '@/components/Chat';
import { EmptyChat } from '@/components/EmptyChat';

import styles from './DialogsPage.module.css';

export const DialogsPage: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	useGate(DialogsGate);

	return (
		<main className={cn(styles.dialogs, className)}>
			<SectionHeader className={styles.heading}>Диалоги</SectionHeader>
			<DialogsList className={styles.dialogList} />
			<Routes>
				<Route path=':id' element={<Chat className={styles.chat} />} />
				<Route path='*' element={<EmptyChat className={styles.chat} />} />
			</Routes>
		</main>
	);
});
