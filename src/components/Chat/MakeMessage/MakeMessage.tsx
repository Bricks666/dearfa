import classNames from 'classnames';
import React, { FC } from 'react';

import { Button, Textarea } from '../../Shared';

import MakeMessageStyle from './MakeMessage.module.css';

const Form: FC = () => {
	/** TODO: Переписать форму добавления сообщения под hook form */
	return (
		<form>
			{/* 			<ReactField
				className={MakeMessageStyle.textarea}
				name="message"
				render={Textarea}
				placeholder="Новое сообщение"
			>
				Новое сообщение
			</ReactField> */}
			<Button className={MakeMessageStyle.button}>Отправить сообщение</Button>
		</form>
	);
};

export const MakeMessage: FC = () => {
	return null;
};
