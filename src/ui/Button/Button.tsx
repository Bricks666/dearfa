import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/types';

import styles from './Button.module.css';

type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps extends CommonProps {
	readonly disabled?: boolean;
	readonly type?: ButtonType;
	readonly title?: string;
	readonly onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({
	className,
	type,
	onClick,
	disabled,
	children,
	title,
}) => {
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
