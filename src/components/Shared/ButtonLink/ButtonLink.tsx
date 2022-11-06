import classNames from 'classnames';
import React, { FC } from 'react';
import { Link, To } from 'react-router-dom';
import { StandardProps } from '@/interfaces/components';

import ButtonLinkStyle from './ButtonLink.module.css';

export interface ButtonLinkProps extends StandardProps {
	readonly to: To;
}

export const ButtonLink: FC<ButtonLinkProps> = ({
	className,
	children,
	to,
}) => {
	return (
		<Link className={classNames(ButtonLinkStyle.link, className)} to={to}>
			{children}
		</Link>
	);
};
