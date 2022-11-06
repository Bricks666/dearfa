import cn from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { CommonProps } from '@/types';

import styles from './Logo.module.css';

interface LogoProps extends CommonProps {
	readonly alt: string;
	readonly src: string;
}

export const Logo: FC<LogoProps> = ({ className, alt, src }) => {
	return (
		<Link className={cn(styles.logo, className)} to='/'>
			<img className={styles.image} src={src} alt={alt} />
		</Link>
	);
};
