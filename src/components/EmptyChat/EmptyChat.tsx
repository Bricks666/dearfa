import classNames from 'classnames';
import React, { FC } from 'react';
import { StandardProps } from '@/interfaces/components';

export const EmptyChat: FC<StandardProps> = ({ className }) => {
	return (
		<section className={classNames(className)}>
			<p>На данный момент ни один чат не выбран</p>
		</section>
	);
};
