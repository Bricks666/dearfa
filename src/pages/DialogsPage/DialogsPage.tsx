import React, { FC } from 'react';
import classNames from 'classnames';
import { Route, Routes } from 'react-router-dom';
import { SectionHeader } from '@/components/Shared';
import { DialogsList } from '@/components/DialogsList';
import { Chat } from '@/components/Chat';
import { EmptyChat } from '@/components/EmptyChat';
import { StandardProps } from '@/interfaces/components';

import DialogsPageStyle from './DialogsPage.module.css';

export const DialogsPage: FC<StandardProps> = ({ className }) => {
	return (
		<main className={classNames(DialogsPageStyle.dialogs, className)}>
			<SectionHeader className={DialogsPageStyle.heading}>
				Диалоги
			</SectionHeader>
			<DialogsList className={DialogsPageStyle.dialogList} />
			<Routes>
				<Route
					path=':id'
					element={<Chat className={DialogsPageStyle.chat} />}
				/>
				<Route
					path='*'
					element={<EmptyChat className={DialogsPageStyle.chat} />}
				/>
			</Routes>
		</main>
	);
};
