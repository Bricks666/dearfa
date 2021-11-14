import React, { useCallback } from "react";

import { Field as ReactField, Form as ReactForm } from "react-final-form";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { sendMessage } from "../../../../Redux/Thunks/sendMessage";
import { Button, Textarea } from "../../../Shared";

import MakeMessageStyle from "./MakeMessage.module.css";

const Form = ({ handleSubmit, className }) => {
	return (
		<form
			onSubmit={handleSubmit}
			className={`${MakeMessageStyle.form} ${className ?? ""}`}
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

export const MakeMessage = ({ className }) => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const onSubmit = useCallback(
		({ message }) => {
			dispatch(sendMessage(id, message));
		},
		[dispatch, id]
	);
	return (
		<ReactForm className={className} onSubmit={onSubmit} component={Form} />
	);
};
