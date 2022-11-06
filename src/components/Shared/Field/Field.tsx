import cn from 'classnames';
import React, { FC } from 'react';
import { CommonProps } from '@/types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import styles from './Field.module.css';

interface FieldProps extends CommonProps {
	readonly input: object;
	readonly meta: any;
	readonly fieldClass?: string;
	readonly accept?: string;
}

const Field: FC<FieldProps> = ({
	input,
	meta: { error, touched },
	className,
	children,
	fieldClass,
	accept,
}) => {
	const showError = touched && error;
	return (
		<label className={cn(styles.label, className)}>
			{showError && <ErrorMessage>{error}</ErrorMessage>}
			{children}
			<input
				className={cn(styles.field, fieldClass)}
				{...input}
				accept={accept}
			/>
		</label>
	);
};

export { Field };
