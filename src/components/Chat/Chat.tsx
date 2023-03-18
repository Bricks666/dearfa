import cn from 'classnames';
import { useGate } from 'effector-react';
import * as React from 'react';
import { routes } from '@/shared/configs';
import styles from './Chat.module.css';
import { Companion } from './Companion/Companion';
import { MakeMessage } from './MakeMessage/MakeMessage';
import { Messages } from './Messages/Messages';

import { useParam } from '@/hooks';
import { MessagesGate } from '@/models/messages';
import { CommonProps } from '@/types';

export const Chat: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;
	const id = useParam(routes.dialogs, 'id')!;
	useGate(MessagesGate, { dialogId: id, count: 10, page: 1, });

	return (
		<section className={cn(styles.chat, className)}>
			<Companion dialogId={+id} />
			<Messages className={styles.messages} dialogId={+id} />
			<MakeMessage /* className={styles.makeMessage} dialogId={+id}  */ />
		</section>
	);
});
