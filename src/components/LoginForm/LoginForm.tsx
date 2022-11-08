import * as React from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { Button, Stack } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { LoginRequest } from '@/api/auth';
import { loginMutation } from '@/models/auth';
import { CommonProps } from '@/types';
import { validateScheme } from './validating';
import { Checkbox, Field } from '@/ui';

import styles from './LoginForm.module.css';

const initialState: LoginRequest = {
	email: '',
	password: '',
	rememberMe: false,
};

export const LoginForm: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const { handleSubmit, control, formState } = useForm<LoginRequest>({
		defaultValues: initialState,
		resolver: joiResolver(validateScheme),
	});
	const { errors, isSubmitting } = formState;
	const { email, password } = errors;

	return (
		<Stack
			className={cn(styles.form, className)}
			spacing={1}
			component='form'
			onSubmit={handleSubmit(loginMutation.start)}>
			<Field
				className={styles.field}
				name='email'
				control={control}
				variant='standard'
				label='Почта'
				error={!!email}
				helperText={email?.message}
			/>
			<Field
				className={styles.field}
				name='password'
				control={control}
				type='password'
				variant='standard'
				label='Пароль'
				error={!!password}
				helperText={password?.message}
			/>

			<Checkbox
				className={styles.checkbox}
				name='rememberMe'
				control={control}
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
	);
});
