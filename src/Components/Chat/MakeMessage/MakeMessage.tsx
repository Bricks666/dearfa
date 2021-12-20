import classNames from "classnames";
import React, { FC } from "react";

import { Field as ReactField, Form as ReactForm } from "react-final-form";
import { Button, Textarea } from "../../Shared";
import { useSendMessage } from "../../../Hooks";
import {
	IMakeMessageComponent,
	IMakeMessageForm,
} from "../../../Types/Components";

import MakeMessageStyle from "./MakeMessage.module.css";

const Form: FC<IMakeMessageForm> = ({ handleSubmit, className }) => {
	return (
		<form
			onSubmit={handleSubmit}
			className={classNames(MakeMessageStyle.form, className)}
		>
			<ReactField
				className={MakeMessageStyle.textarea}
				name="message"
				render={Textarea}
				placeholder="Новое сообщение"
			>
				Новое сообщение
			</ReactField>
			<Button className={MakeMessageStyle.button}>Отправить сообщение</Button>
		</form>
	);
};

export const MakeMessage: FC<IMakeMessageComponent> = ({
	className,
	dialogId,
}) => {
	const { sendMessage: onSubmit } = useSendMessage(dialogId);
	return <ReactForm className={className} onSubmit={onSubmit} render={Form} />;
};
