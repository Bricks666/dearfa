import { Button, Stack, TextField } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import styles from './RegistrationForm.module.css';
import { CommonProps } from '@/types';

export const RegistrationForm: React.FC<CommonProps> = React.memo((props) => {
	const { className, } = props;

	return (
		<Stack className={cn(styles.form, className)} spacing={1} component='form'>
			<TextField variant='standard' label='Почта' />
			<TextField type='password' variant='standard' label='Пароль' />

			<Button className={styles.button} type='submit' variant='contained'>
				Зарегистрироваться
			</Button>
		</Stack>
	);
});
