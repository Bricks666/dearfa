/* eslint-disable react/jsx-pascal-case */
import { joiResolver } from '@hookform/resolvers/joi';
import { Button, Stack } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { LoginRequest } from '@/shared/api/auth';
import { CommonProps } from '@/shared/types';
import { Checkbox, _Field } from '@/shared/ui';
import styles from './LoginForm.module.css';
import { validateScheme } from './validating';
import { loginMutation } from '@/models/auth';

const initialState: LoginRequest = {
	email: '',
	password: '',
	rememberMe: false,
};

export const LoginForm: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;
	const { handleSubmit, control, formState, } = useForm<LoginRequest>({
		defaultValues: initialState,
		resolver: joiResolver(validateScheme),
	});
	const { errors, isSubmitting, } = formState;
	const { email, password, } = errors;

	return (
		<Stack
			className={cn(styles.form, className)}
			spacing={1}
			component='form'
			onSubmit={handleSubmit(loginMutation.start)}>
			<_Field
				className={styles.field}
				name='email'
				control={control}
				variant='standard'
				label='Почта'
				error={!!email}
				helperText={email?.message}
			/>
			<_Field
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
