import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import styles from './SectionHeader.module.css';

export const SectionHeader: React.FC<React.PropsWithChildren<CommonProps>> = (
	props
) => {
	const { className, children, } = props;
	return <h2 className={cn(styles.header, className)}>{children}</h2>;
};
