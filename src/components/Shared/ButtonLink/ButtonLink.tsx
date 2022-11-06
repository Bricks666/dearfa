import cn from 'classnames';
import React, { FC } from 'react';
import { Link, To } from 'react-router-dom';
import { CommonProps } from '@/types';

import styles from './ButtonLink.module.css';

export interface ButtonLinkProps extends CommonProps {
	readonly to: To;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
	className,
	children,
	to,
}) => {
	return (
		<Link className={cn(styles.link, className)} to={to}>
			{children}
		</Link>
	);
};
