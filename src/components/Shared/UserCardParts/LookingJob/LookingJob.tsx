import React, { FC } from 'react';
import { StandardProps } from '@/interfaces/components';

export const LookingJob: FC<StandardProps> = ({ className }) => {
	return (
		<div className={className}>
			<dt>Ищет работу:</dt>
			<dd>Нет</dd>
		</div>
	);
};
