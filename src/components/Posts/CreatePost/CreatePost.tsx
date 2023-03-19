import { Button, TextField } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { CommonProps } from '@/shared/types';
import styles from './CreatePost.module.css';

export const CreatePost: React.FC<CommonProps> = (props) => {
	const { className, } = props;
	const { register, handleSubmit, reset, } = useForm<{ content: string }>({
		defaultValues: {
			content: '',
		},
	});
	const onSubmit = () => {
		reset();
	};
	return (
		<form
			className={cn(styles.form, className)}
			onSubmit={handleSubmit(onSubmit)}>
			<TextField
				label='Содержание поста'
				placeholder='Чем хотите поделиться'
				{...register('content')}
				multiline
			/>
			<Button className={styles.button} type='submit'>
				Опубликовать
			</Button>
		</form>
	);
};
