import classNames from "classnames";
import React, { FC } from "react";

import { Field as ReactField, Form as ReactForm } from "react-final-form";
import { Button, Textarea } from "../../../Shared";
import { useSendMessage } from "../../../../Hooks";
import { IFormInner, IOnlyClassComponent } from "../../../../Types/Common";

import MakeMessageStyle from "./MakeMessage.module.css";

const Form: FC<IFormInner<FormValues>> = ({ handleSubmit, className }) => {
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

type FormValues = {
	message: string;
};

interface IMakeMessage extends IOnlyClassComponent {
	dialogId: number;
}

export const MakeMessage: FC<IMakeMessage> = ({ className, dialogId }) => {
	const { sendMessage: onSubmit } = useSendMessage(dialogId);
	return (
		<ReactForm<FormValues>
			className={className}
			onSubmit={onSubmit}
			render={Form}
		/>
	);
};
