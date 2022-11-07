import cn from 'classnames';
import * as React from 'react';

import { Button, Textarea } from '../../../ui';

import styles from './MakeMessage.module.css';

const Form: FC = () => {
	/** TODO: Переписать форму добавления сообщения под hook form */
	return (
		<form>
			{/* 			<ReactField
				className={styles.textarea}
				name="message"
				render={Textarea}
				placeholder="Новое сообщение"
			>
				Новое сообщение
			</ReactField> */}
			<Button className={styles.button}>Отправить сообщение</Button>
		</form>
	);
};

export const MakeMessage: FC = () => {
	return null;
};
