import cn from 'classnames';
import * as React from 'react';
import styles from './List.module.css';
import { ID, CommonProps } from '@/types';

interface ListProps<T> extends CommonProps {
	readonly items: T[];
	readonly Card: React.ComponentType<T>;
}

type ListComponent = <T extends { id: ID }>(
	props: ListProps<T>
) => React.ReactElement;

export const List: ListComponent = ({ Card, items, className, }) => {
	return (
		<ul className={cn(styles.list, className)}>
			{items.map((item) => {
				return <Card {...item} key={item.id} />;
			})}
		</ul>
	);
};
