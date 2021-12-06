import classNames from "classnames";
import React from "react";

import { Field as ReactField, Form as ReactForm } from "react-final-form";
import { Button, Textarea } from "../../../Shared";
import { useSendMessage } from "../../../../Hooks";

import MakeMessageStyle from "./MakeMessage.module.css";

const Form = ({ handleSubmit, className }) => {
	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(MakeMessageStyle.form, className)}
		>
			<ReactField
				className={MakeMessageStyle.textarea}
				name="message"
				component={Textarea}
				placeholder="Новое сообщение"
			>
				Новое сообщение
			</ReactField>
			<Button className={MakeMessageStyle.button}>Отправить сообщение</Button>
		</form>
	);
};

export const MakeMessage = ({ className, dialogId }) => {
	const { sendMessage: onSubmit } = useSendMessage(dialogId);
	return (
		<ReactForm className={className} onSubmit={onSubmit} component={Form} />
	);
};
