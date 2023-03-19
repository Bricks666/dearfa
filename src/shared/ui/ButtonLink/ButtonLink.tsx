import { Link } from 'atomic-router-react';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import styles from './ButtonLink.module.css';

export interface ButtonLinkProps extends CommonProps {
	readonly to: any;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
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
