import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { StandardProps } from '@/interfaces/components';

import LogoStyle from './Logo.module.css';

interface LogoProps extends StandardProps {
	readonly alt: string;
	readonly src: string;
}

export const Logo: FC<LogoProps> = ({ className, alt, src }) => {
	return (
		<Link className={classNames(LogoStyle.logo, className)} to='/'>
			<img className={LogoStyle.image} src={src} alt={alt} />
		</Link>
	);
};
