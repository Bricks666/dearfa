import cn from 'classnames';
import * as React from 'react';

import { CreateMessage } from '@/features/messages';
import { CommonProps } from '@/shared/types';
import { DialogHeader } from '../dialog-header';
import { MessagesList } from '../messages-list';
import styles from './chat.module.css';

export interface ChatProps extends CommonProps {}

export const Chat: React.FC<ChatProps> = (props) => {
	const { className, } = props;

	return (
		<section className={cn(styles.chat, className)}>
			<DialogHeader dialogId={0} />
			<MessagesList className={styles.messages} dialogId={0} />
			<CreateMessage className={styles.create} />
		</section>
	);
};
