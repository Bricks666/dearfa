import classNames from 'classnames';
import React, { FC, MouseEventHandler } from 'react';
import { StandardProps } from '@/interfaces/components';

import ButtonStyle from './Button.module.css';

type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps extends StandardProps {
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
			className={classNames(ButtonStyle.button, className)}
			type={type}
			onClick={onClick}
			disabled={disabled}
			title={title}>
			{children}
		</button>
	);
};

export { Button };
