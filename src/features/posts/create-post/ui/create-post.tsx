import { Button, Paper } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import * as React from 'react';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { form } from '../model';
import styles from './create-post.module.css';

export const CreatePost: React.FC<CommonProps> = (props) => {
	const { className, } = props;

	const { fields, submit, } = useForm(form);
	const { content, } = fields;

	const onSubmit = useSubmit(submit);

	return (
		<Paper
			className={cn(styles.form, className)}
			onSubmit={onSubmit}
			variant='outlined'
			component='form'>
			<Field
				placeholder='Чем хотите поделиться'
				value={content.value}
				onChange={content.onChange}
				onBlur={content.onBlur}
				helperText={content.errorText()}
				isValid={content.isValid}
				name={content.name}
				label='Содержание поста'
				multiline
			/>
			<Button className={styles.button} type='submit' variant='contained'>
				Опубликовать
			</Button>
		</Paper>
	);
};
