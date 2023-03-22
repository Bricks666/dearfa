import { Button, Paper, Stack, Typography } from '@mui/material';
import cn from 'classnames';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Checkbox, Field } from '@/shared/ui';
import { form, mutation } from '../model';
import styles from './login-form.module.css';

export interface LoginFormProps extends CommonProps {}

export const LoginForm: React.FC<LoginFormProps> = React.memo((props) => {
	const { className, } = props;
	const { fields, submit, } = useForm(form);
	const isSubmitting = useUnit(mutation.$pending);

	const { email, password, rememberMe, } = fields;
	const onSubmit = useSubmit(submit);

	return (
		<Paper className={cn(styles.wrapper, className)} variant='outlined'>
			<Stack
				className={styles.form}
				spacing={1}
				component='form'
				onSubmit={onSubmit}>
				<Typography className={styles.title} variant='h4' component='p'>
					Вход
				</Typography>
				<Field
					className={styles.field}
					value={email.value}
					onChange={email.onChange}
					onBlur={email.onBlur}
					helperText={email.errorText()}
					isValid={email.isValid}
					name={email.name}
					label='Email'
				/>
				<Field
					className={styles.field}
					value={password.value}
					onChange={password.onChange}
					onBlur={password.onBlur}
					helperText={password.errorText()}
					isValid={password.isValid}
					name={password.name}
					label='Пароль'
					type='password'
				/>

				<Checkbox
					className={styles.checkbox}
					checked={rememberMe.value}
					onChange={rememberMe.onChange}
					name={rememberMe.name}
					label='Запомнить меня'
				/>
				<Button
					className={styles.button}
					type='submit'
					variant='contained'
					disabled={isSubmitting}>
					Войти
				</Button>
			</Stack>
		</Paper>
	);
});
