import classNames from "classnames";
import React, { FC, useCallback } from "react";
import { Form as ReactForm, Field as ReactField } from "react-final-form";
import {
	FormSubmitHandler,
	IFormInner,
	IOnlyClassComponent,
} from "../../../Types/Common";
import { Button, Textarea } from "../../Shared";

import MakePostStyle from "./MakePost.module.css";

const Form: FC<IFormInner<FormValues>> = ({
	className,
	handleSubmit,
	pristine,
}) => {
	return (
		<form
			className={classNames(MakePostStyle.form, className)}
			onSubmit={handleSubmit}
		>
			<ReactField
				name="message"
				render={Textarea}
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

type FormValues = {
	messages: string;
};

export const MakePost: FC<IOnlyClassComponent> = ({ className }) => {
	const onSubmit = useCallback<FormSubmitHandler<FormValues>>(
		({ messages }) => console.log(messages),
		[]
	);
	return (
		<ReactForm className={className} onSubmit={onSubmit} component={Form} />
	);
};
