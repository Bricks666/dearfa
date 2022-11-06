import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { StandardProps } from '@/interfaces/components';
import { ID } from '@/interfaces/common';

import FullNameStyle from './FullName.module.css';

interface FullNameProps extends StandardProps {
	readonly id: ID;
}

export const FullName: FC<FullNameProps> = ({ id, className, children }) => {
	return (
		<Link
			className={classNames(FullNameStyle.link, className)}
			to={`/profile/${id}`}>
			<h4 className={FullNameStyle.name}>{children}</h4>
		</Link>
	);
};
