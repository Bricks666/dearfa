import React, { ComponentType, ReactElement } from 'react';
import classNames from 'classnames';
import { ID } from '@/interfaces/common';
import { StandardProps } from '@/interfaces/components';

import ListStyle from './List.module.css';

interface ListProps<T> extends StandardProps {
	readonly items: T[];
	readonly Card: ComponentType<T>;
}

type ListComponent = <T extends { id: ID }>(
	props: ListProps<T>
) => ReactElement;

export const List: ListComponent = ({ Card, items, className }) => {
	return (
		<ul className={classNames(ListStyle.list, className)}>
			{items.map((item) => {
				return <Card {...item} key={item.id} />;
			})}
		</ul>
	);
};
