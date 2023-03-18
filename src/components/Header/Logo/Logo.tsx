import { Link } from 'atomic-router-react';
import cn from 'classnames';
import * as React from 'react';
import styles from './Logo.module.css';
import { CommonProps } from '@/types';

export interface LogoProps extends CommonProps {
	readonly alt: string;
	readonly src: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
	const { className, alt, src, } = props;
	return (
		<Link className={cn(styles.logo, className)} to='/'>
			<img className={styles.image} src={src} alt={alt} />
		</Link>
	);
};
