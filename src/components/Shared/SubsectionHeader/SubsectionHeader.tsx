import React, { FC } from 'react';
import classNames from 'classnames';
import { StandardProps } from '@/interfaces/components';

import SubsectionHeaderStyle from './SubsectionHeader.module.css';

const SubsectionHeader: FC<StandardProps> = ({ className, children }) => {
	return (
		<h3 className={classNames(SubsectionHeaderStyle.header, className)}>
			{children}
		</h3>
	);
};

export { SubsectionHeader };
