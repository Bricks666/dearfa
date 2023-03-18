import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Message } from '@/shared/api';
import { MessageCard } from './Message/Message';

import styles from './Messages.module.css';
import { $authUser } from '@/models/auth';
import { CommonProps } from '@/types';

interface MessagesProps extends CommonProps {
	readonly dialogId: number;
}

const Messages: React.FC<MessagesProps> = (props) => {
	const { className, } = props;
	const { id: authId, } = useUnit($authUser)!;
	const messages = [] as Message[];

	/** TODO: Добавить загрузку */
	return (
		<section className={cn(styles.wrapper, className)} aria-label='чат с'>
			<div className={styles.messages}>
				{messages.map((message) => {
					return (
						<MessageCard
							className={cn(styles.message, {
								[styles.myMessage]: authId === message.senderId,
							})}
							viewed={message.viewed}
							senderName={message.senderName}
							addedAt={message.addedAt}
							key={message.id}>
							{message.body}
						</MessageCard>
					);
				})}
			</div>
		</section>
	);
};

export { Messages };
