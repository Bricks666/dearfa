import classNames from 'classnames';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { StandardProps } from '@/interfaces/components';
import { selectAuthId } from '@/models/auth';
import { MessageCard } from './Message/Message';
import { useMessages } from '@/hooks';

import MessagesStyle from './Messages.module.css';

interface MessagesProps extends StandardProps {
	readonly dialogId: number;
}

const Messages: FC<MessagesProps> = ({ className, dialogId }) => {
	const authId = useSelector(selectAuthId);
	const messages = useMessages(dialogId);

	/** TODO: Добавить загрузку */
	return (
		<section
			className={classNames(MessagesStyle.wrapper, className)}
			aria-label='чат с'>
			<div className={MessagesStyle.messages}>
				{messages.map((message) => {
					return (
						<MessageCard
							className={classNames(MessagesStyle.message, {
								[MessagesStyle.myMessage]: authId === message.senderId,
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
