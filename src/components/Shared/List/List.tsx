import React, { ComponentType, ReactElement } from 'react';
import cn from 'classnames';
import { ID } from '@/types';
import { CommonProps } from '@/types';

import styles from './List.module.css';

interface ListProps<T> extends CommonProps {
	readonly items: T[];
	readonly Card: ComponentType<T>;
}

type ListComponent = <T extends { id: ID }>(
	props: ListProps<T>
) => ReactElement;

export const List: ListComponent = ({ Card, items, className }) => {
	return (
		<ul className={cn(styles.list, className)}>
			{items.map((item) => {
				return <Card {...item} key={item.id} />;
			})}
		</ul>
	);
};
