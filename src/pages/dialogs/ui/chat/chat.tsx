import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';

import { CreateMessage } from '@/features/messages';
import { CommonProps } from '@/shared/types';
import { pageModel } from '../../models';
import { DialogHeader } from '../dialog-header';
import { MessagesList } from '../messages-list';
import styles from './chat.module.css';

export interface ChatProps extends CommonProps {}

export const Chat: React.FC<ChatProps> = (props) => {
	const { className, } = props;

	const anyChatOpen = useUnit(pageModel.$hasId);

	if (!anyChatOpen) {
		return null;
	}

	return (
		<section className={cn(styles.chat, className)}>
			<DialogHeader />
			<MessagesList className={styles.messages} />
			<CreateMessage className={styles.create} />
		</section>
	);
};
