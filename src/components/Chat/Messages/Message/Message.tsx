import cn from 'classnames';
import * as React from 'react';
import { Message } from '@/shared/api';
import styles from './Message.module.css';
import { CommonProps } from '@/types';
import { Date } from '@/ui';

interface MessageProps extends CommonProps, Message {}

export const MessageCard: React.FC<MessageProps> = React.memo((props) => {
	const { className, senderName, viewed, addedAt, body, } = props;
	return (
		<article
			className={cn(styles.message, className, {
				[styles.notViewed]: viewed === false,
			})}>
			<span className={styles.author}>{senderName}</span>
			<p className={styles.content}>{body}</p>
			<Date className={styles.dateTime} date={addedAt} />
		</article>
	);
});
