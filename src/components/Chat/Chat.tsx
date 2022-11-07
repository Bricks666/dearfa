import * as React from 'react';
import cn from 'classnames';
import { useParam } from '@/hooks';
import { dialogsRoute } from '@/routes';
import { CommonProps } from '@/types';
import { MakeMessage } from './MakeMessage/MakeMessage';
import { Messages } from './Messages/Messages';
import { Companion } from './Companion/Companion';

import styles from './Chat.module.css';

export const Chat: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const id = useParam(dialogsRoute, 'id')!;

	return (
		<section className={cn(styles.chat, className)}>
			<Companion dialogId={+id} />
			<Messages className={styles.messages} dialogId={+id} />
			<MakeMessage /* className={styles.makeMessage} dialogId={+id}  */ />
		</section>
	);
});
