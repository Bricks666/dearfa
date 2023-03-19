import { Paper, Stack } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { messagesModel, TemplateMessageItem } from '@/entities/messages';
import { CommonProps } from '@/shared/types';

import styles from './messages-list.module.css';
import { $authUser } from '@/models/auth';

export interface MessagesListProps extends CommonProps {}

export const MessagesList: React.FC<MessagesListProps> = (props) => {
	const { className, } = props;
	const { id: authId, } = useUnit($authUser)!;
	const messages = useUnit(messagesModel.query);

	/** TODO: Добавить загрузку */
	return (
		<Paper className={cn(styles.wrapper, className)} aria-label='чат с'>
			<Stack className={styles.messages}>
				{messages.data.items.map((message) => {
					return (
						<TemplateMessageItem
							className={cn(styles.message, {
								[styles.myMessage]: authId === message.senderId,
							})}
							{...message}
							key={message.id}
						/>
					);
				})}
			</Stack>
		</Paper>
	);
};
