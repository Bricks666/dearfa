import * as React from 'react';
import cn from 'classnames';
import { useNavigate, useParams } from 'react-router-dom';
import { useEscListener } from '@/hooks';
import { MakeMessage } from './MakeMessage/MakeMessage';
import { Messages } from './Messages/Messages';
import { Companion } from './Companion/Companion';
import { CommonProps } from '@/types';

import styles from './Chat.module.css';

const Chat: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const { id = '' } = useParams();

	const navigate = useNavigate();
	const escPressHandler = React.useCallback(() => {
		navigate('/dialogs');
	}, [navigate]);
	useEscListener(escPressHandler);

	return (
		<section className={cn(styles.chat, className)}>
			<Companion className={styles.header} dialogId={+id} />
			<Messages className={styles.messages} dialogId={+id} />
			<MakeMessage /* className={styles.makeMessage} dialogId={+id}  */ />
		</section>
	);
});

export { Chat };
