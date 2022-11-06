import React, { FC } from 'react';
import cn from 'classnames';
import { CommonProps } from '@/types';

import styles from './Checkbox.module.css';

interface CheckboxProps extends CommonProps {
	readonly input: object;
}

export const Checkbox: FC<CheckboxProps> = ({ className, input, children }) => {
	return (
		<div className={cn(className)}>
			<input
				className={styles.input}
				type='checkbox'
				id='checkbox'
				{...input}
			/>
			<label className={styles.label} htmlFor='checkbox'>
				{children}
			</label>
		</div>
	);
};
