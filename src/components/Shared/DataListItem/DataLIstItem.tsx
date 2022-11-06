import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import { CommonProps } from '@/types';

import styles from './DataListItem.module.css';

export interface DataListItemProps extends CommonProps {
	readonly term: ReactNode;
	readonly description: ReactNode;
	readonly termClass?: string;
	readonly descriptionClass?: string;
}

export const DataListItem: FC<DataListItemProps> = ({
	className,
	termClass,
	descriptionClass,
	term,
	description,
}) => {
	return (
		<div className={cn(styles.item, className)}>
			<dt className={cn(styles.term, termClass)}>{term}</dt>
			<dd className={cn(styles.desc, descriptionClass)}>{description}</dd>
		</div>
	);
};
