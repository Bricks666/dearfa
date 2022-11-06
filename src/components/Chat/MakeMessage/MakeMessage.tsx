import cn from 'classnames';
import React, { FC } from 'react';

import { Button, Textarea } from '../../Shared';

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
