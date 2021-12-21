import classNames from "classnames";
import React, { FC, useCallback } from "react";
import { Form as ReactForm, Field as ReactField } from "react-final-form";
import {
	MakePostFormComponent,
	MakePostHandler,
	IOnlyClassComponent,
} from "../../../Types/Components";
import { Button, Textarea } from "../../Shared";

import MakePostStyle from "./MakePost.module.css";

const Form: FC<MakePostFormComponent> = ({
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

export const MakePost: FC<IOnlyClassComponent> = ({ className }) => {
	const onSubmit = useCallback<MakePostHandler>(
		({ message }) => console.log(message),
		[]
	);
	return (
		<ReactForm className={className} onSubmit={onSubmit} component={Form} />
	);
};
