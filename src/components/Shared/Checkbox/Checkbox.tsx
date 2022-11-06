import React, { FC } from 'react';
import classNames from 'classnames';
import { StandardProps } from '@/interfaces/components';

import CheckboxStyle from './Checkbox.module.css';

interface CheckboxProps extends StandardProps {
	readonly input: object;
}

export const Checkbox: FC<CheckboxProps> = ({ className, input, children }) => {
	return (
		<div className={classNames(className)}>
			<input
				className={CheckboxStyle.input}
				type='checkbox'
				id='checkbox'
				{...input}
			/>
			<label className={CheckboxStyle.label} htmlFor='checkbox'>
				{children}
			</label>
		</div>
	);
};
