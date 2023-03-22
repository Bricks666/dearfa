import SendIcon from '@mui/icons-material/Send';
import { IconButton, Paper } from '@mui/material';
import { useForm } from 'effector-forms';
import * as React from 'react';
import { useSubmit } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { Field } from '@/shared/ui';
import { form } from '../model';

import styles from './create-message.module.css';

export interface CreateMessageProps extends CommonProps {}

export const CreateMessage: React.FC<CreateMessageProps> = (props) => {
	const { className, } = props;

	const { fields, submit, } = useForm(form);
	const { body, } = fields;

	const onSubmit = useSubmit(submit);

	return (
		<Paper className={className} variant='outlined'>
			<form className={styles.form} onSubmit={onSubmit}>
				<Field
					value={body.value}
					onChange={body.onChange}
					onBlur={body.onBlur}
					helperText={body.errorText()}
					isValid={body.isValid}
					name={body.name}
					minRows={1}
					placeholder='Что вы хотите написать'
					multiline
				/>
				<IconButton className={styles.button} color='primary' type='submit'>
					<SendIcon />
				</IconButton>
			</form>
		</Paper>
	);
};
