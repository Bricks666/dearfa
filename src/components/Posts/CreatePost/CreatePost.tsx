import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/types';
/* import { Form as ReactForm, Field as ReactField } from "react-final-form"; */
/* import {
	CreatePostFormComponent,
	CreatePostHandler,
	IOnlyClassComponent,
} from "../../../types/Components"; */
import { Button, Textarea } from '../../Shared';

import styles from './CreatePost.module.css';

const Form: FC = (/* {
	className,
	handleSubmit,
	pristine,
} */) => {
	return null;
	/* 		<form
			className={cn(styles.form, className)}
			onSubmit={handleSubmit}
		>
			<ReactField
				name="message"
				render={Textarea}
				placeholder="Чем хотите поделиться"
			>
				Ваш новый пост
			</ReactField>
			<Button className={styles.button} disabled={pristine}>
				Опубликовать
			</Button>
		</form> */
};

export const CreatePost: FC<CommonProps> = () => {
	return null;
	/* 		<ReactForm className={className} onSubmit={onSubmit} component={Form} /> */
};
