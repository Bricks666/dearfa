import classNames from "classnames";
import React, { useCallback } from "react";
import { Form as ReactForm, Field as ReactField } from "react-final-form";
import { Button, Textarea } from "../../../Shared";

import MakePostStyle from "./MakePost.module.css";

const Form = ({ className, handleSubmit, pristine }) => {
	return (
		<form
			className={classNames(MakePostStyle.form, className)}
			onSubmit={handleSubmit}
		>
			<ReactField
				name="message"
				component={Textarea}
				placeholder="Чем хотите поделиться"
			>
				Ваш новый пост
			</ReactField>
			<Button className={MakePostStyle.button} disabled={pristine}>
				Опубликовать
			</Button>
		</form>
	);
};

export const MakePost = ({ className }) => {
	const onSubmit = useCallback(({ message }) => console.log(message), []);
	return (
		<ReactForm className={className} onSubmit={onSubmit} component={Form} />
	);
};
