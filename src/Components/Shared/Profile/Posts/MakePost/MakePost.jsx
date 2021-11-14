import React, { useCallback } from "react";
import { Form as ReactForm, Field as ReactField } from "react-final-form";
import { Button, Textarea } from "../../..";

import MakePostStyle from "./MakePost.module.css";

const Form = ({ className, handleSubmit }) => {
	return (
		<form
			className={`${MakePostStyle.form} ${className ?? ""}`}
			onSubmit={handleSubmit}
		>
			<ReactField
				name="message"
				component={Textarea}
				placeholder="Чем хотите поделиться"
			>
				Ваш новый пост
			</ReactField>
			<Button className={MakePostStyle.button}>Опубликовать</Button>
		</form>
	);
};

export const MakePost = ({ className }) => {
	const onSubmit = useCallback(({ message }) => console.log(message), []);
	return (
		<ReactForm className={className} onSubmit={onSubmit} component={Form} />
	);
};
