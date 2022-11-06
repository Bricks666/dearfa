import React, { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {
	Button,
	Checkbox,
	FormControlLabel,
	Stack,
	SxProps,
	TextField,
} from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';
import { LoginRequest } from '@/api';
import { useTypedDispatch } from '@/hooks';
import { StandardProps } from '@/interfaces/components';
import { loginThunk } from '@/models/auth';
import { validateScheme } from './validating';

const initialState: LoginRequest = {
	email: '',
	password: '',
	rememberMe: false,
};

/** TODO: Переписать форму */
const form: SxProps = {
	display: 'grid',
	gridTemplateColumns: 'max-content auto',
	width: '460px',
};

const field: SxProps = {
	gridColumn: 'span 2',
};

const checkbox: SxProps = {
	width: 'max-content',
};

const button: SxProps = {
	justifySelf: 'end',
};

export const LoginForm: FC<StandardProps> = ({ className }) => {
	const { handleSubmit, register, formState } = useForm<LoginRequest>({
		defaultValues: initialState,
		resolver: joiResolver(validateScheme),
	});
	const dispatch = useTypedDispatch();
	const onSubmit = useCallback(
		(values: LoginRequest) => {
			dispatch(loginThunk(values));
		},
		[dispatch]
	);

	const { errors, isSubmitting } = formState;
	const { email, password } = errors;
	return (
		<Stack
			className={className}
			spacing={1}
			sx={form}
			component='form'
			onSubmit={handleSubmit(onSubmit)}>
			<TextField
				{...register('email')}
				variant='standard'
				label='Почта'
				error={!!email}
				helperText={email?.message}
				sx={field}
			/>
			<TextField
				{...register('password')}
				type='password'
				variant='standard'
				label='Пароль'
				error={!!password}
				helperText={password?.message}
				sx={field}
			/>
			<FormControlLabel
				control={<Checkbox {...register('rememberMe')} sx={checkbox} />}
				label='Запомнить меня'
			/>

			<Button
				type='submit'
				sx={button}
				variant='contained'
				disabled={isSubmitting}>
				Войти
			</Button>
		</Stack>
	);
};
