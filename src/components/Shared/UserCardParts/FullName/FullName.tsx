import * as React from 'react';
import cn from 'classnames';
import { Link } from 'atomic-router-react';
import { CommonProps } from '@/types';

import styles from './FullName.module.css';

export interface FullNameProps extends CommonProps {
	readonly id: number;
}

export const FullName: React.FC<FullNameProps> = ({
	id,
	className,
	children,
}) => {
	return (
		<Link className={cn(styles.link, className)} to={`/profile/${id}`}>
			<h4 className={styles.name}>{children}</h4>
		</Link>
	);
};
