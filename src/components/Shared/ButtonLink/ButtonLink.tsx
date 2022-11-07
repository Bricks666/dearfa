import * as React from 'react';
import cn from 'classnames';
import { Link } from 'atomic-router-react';
import { CommonProps } from '@/types';

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
