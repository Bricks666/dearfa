import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { StandardProps } from '@/interfaces/components';

import DataListItemStyle from './DataListItem.module.css';

export interface DataListItemProps extends StandardProps {
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
		<div className={classNames(DataListItemStyle.item, className)}>
			<dt className={classNames(DataListItemStyle.term, termClass)}>{term}</dt>
			<dd className={classNames(DataListItemStyle.desc, descriptionClass)}>
				{description}
			</dd>
		</div>
	);
};
