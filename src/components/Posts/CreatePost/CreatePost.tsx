import { StandardProps } from "@/interfaces/components";
import classNames from "classnames";
import React, { FC, useCallback } from "react";
/* import { Form as ReactForm, Field as ReactField } from "react-final-form"; */
/* import {
	CreatePostFormComponent,
	CreatePostHandler,
	IOnlyClassComponent,
} from "../../../types/Components"; */
import { Button, Textarea } from "../../Shared";

import CreatePostStyle from "./CreatePost.module.css";

const Form: FC = (/* {
	className,
	handleSubmit,
	pristine,
} */) => {
	return null;
	/* 		<form
			className={classNames(CreatePostStyle.form, className)}
			onSubmit={handleSubmit}
		>
			<ReactField
				name="message"
				render={Textarea}
				placeholder="Чем хотите поделиться"
			>
				Ваш новый пост
			</ReactField>
			<Button className={CreatePostStyle.button} disabled={pristine}>
				Опубликовать
			</Button>
		</form> */
};

export const CreatePost: FC<StandardProps> = () => {
	return null;
	/* 		<ReactForm className={className} onSubmit={onSubmit} component={Form} /> */
};
