import { Link } from 'atomic-router-react';
import cn from 'classnames';
import * as React from 'react';
import { routes } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import styles from './Logo.module.css';

export interface LogoProps extends CommonProps {
	readonly alt: string;
	readonly src: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
	const { className, alt, src, } = props;
	return (
		<Link className={cn(styles.logo, className)} to={routes.news}>
			<img className={styles.image} src={src} alt={alt} />
		</Link>
	);
};
