import classNames from 'classnames';
import React, { FC } from 'react';
import { StandardProps } from '@/interfaces/components';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import FieldStyle from './Field.module.css';

interface FieldProps extends StandardProps {
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
		<label className={classNames(FieldStyle.label, className)}>
			{showError && <ErrorMessage>{error}</ErrorMessage>}
			{children}
			<input
				className={classNames(FieldStyle.field, fieldClass)}
				{...input}
				accept={accept}
			/>
		</label>
	);
};

export { Field };
