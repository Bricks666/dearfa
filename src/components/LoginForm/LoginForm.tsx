import * as React from 'react';
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
import { CommonProps } from '@/types';
import { validateScheme } from './validating';
import { LoginRequest } from '@/api/auth';
import { loginMutation } from '@/models/auth';

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

export const LoginForm: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const { handleSubmit, register, formState } = useForm<LoginRequest>({
		defaultValues: initialState,
		resolver: joiResolver(validateScheme),
	});
	console.debug('Form');
	const { errors, isSubmitting } = formState;
	const { email, password } = errors;

	return (
		<Stack
			className={className}
			spacing={1}
			sx={form}
			component='form'
			onSubmit={handleSubmit(loginMutation.start)}>
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
});
