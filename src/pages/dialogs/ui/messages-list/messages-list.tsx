import { Paper, Stack } from '@mui/material';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { authUserModel } from '@/entities/auth-user';
import { messagesModel, TemplateMessageItem } from '@/entities/messages';
import { CommonProps } from '@/shared/types';

import styles from './messages-list.module.css';

export interface MessagesListProps extends CommonProps {}

export const MessagesList: React.FC<MessagesListProps> = (props) => {
	const { className, } = props;
	const { id: authId, } = useUnit(authUserModel.$user)!;
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
