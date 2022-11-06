import React, { FC } from 'react';
import classNames from 'classnames';
import { StandardProps } from '@/interfaces/components';

import SectionHeaderStyle from './SectionHeader.module.css';

export const SectionHeader: FC<StandardProps> = ({ className, children }) => {
	return (
		<h2 className={classNames(SectionHeaderStyle.header, className)}>
			{children}
		</h2>
	);
};
