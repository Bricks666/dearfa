import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/types';

export const EmptyChat: React.FC<CommonProps> = (props) => {
	const { className } = props;

	return (
		<section className={cn(className)}>
			<p>На данный момент ни один чат не выбран</p>
		</section>
	);
};
