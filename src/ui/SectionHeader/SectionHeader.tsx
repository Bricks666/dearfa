import cn from 'classnames';
import * as React from 'react';
import styles from './SectionHeader.module.css';
import { CommonProps } from '@/types';

export const SectionHeader: React.FC<React.PropsWithChildren<CommonProps>> = (
	props
) => {
	const { className, children, } = props;
	return <h2 className={cn(styles.header, className)}>{children}</h2>;
};
