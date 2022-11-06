import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/types';

import styles from './SubsectionHeader.module.css';

export const SubsectionHeader: React.FC<
	React.PropsWithChildren<CommonProps>
> = (props) => {
	const { className, children } = props;
	return <h3 className={cn(styles.header, className)}>{children}</h3>;
};
