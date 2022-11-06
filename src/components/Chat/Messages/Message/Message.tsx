import React, { FC } from 'react';
import cn from 'classnames';
import { Date } from '@/components/Shared';
import { Message } from '@/models/messages';
import { CommonProps } from '@/types';

import styles from './Message.module.css';

interface MessageProps
	extends CommonProps,
		Omit<Message, 'body' | 'id' | 'senderId'> {}

export const MessageCard: FC<MessageProps> = ({
	className,
	children,
	senderName,
	viewed,
	addedAt,
}) => {
	return (
		<article
			className={cn(styles.message, className, {
				[styles.notViewed]: viewed === false,
			})}>
			<span className={styles.author}>{senderName}</span>
			<p className={styles.content}>{children}</p>
			<Date className={styles.dateTime} date={addedAt} />
		</article>
	);
};
