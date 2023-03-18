/* eslint-disable react/button-has-type */
import cn from 'classnames';
import * as React from 'react';
import styles from './Button.module.css';
import { CommonProps } from '@/types';

type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps extends CommonProps, React.PropsWithChildren {
	readonly disabled?: boolean;
	readonly type?: ButtonType;
	readonly title?: string;
	readonly onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props) => {
	const { className, type, onClick, disabled, children, title, } = props;

	return (
		<button
			className={cn(styles.button, className)}
			type={type}
			onClick={onClick}
			disabled={disabled}
			title={title}>
			{children}
		</button>
	);
};

export { Button };
