import * as React from 'react';
import { CommonProps } from '@/types';
import { ErrorMessage } from '..';

import styles from './Textarea.module.css';

interface TextareaProps extends CommonProps {
	readonly input: object;
	readonly meta: any;
	readonly placeholder?: string;
}

export const Textarea: FC<TextareaProps> = ({
	children,
	placeholder,
	input,
	meta: { error, touched },
}) => {
	const showError = error && touched;
	return (
		<label className={styles.label}>
			{showError && <ErrorMessage>{error}</ErrorMessage>}
			{children}
			<textarea
				className={styles.textarea}
				placeholder={placeholder}
				{...input}
			/>
		</label>
	);
};
