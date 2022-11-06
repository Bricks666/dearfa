import React, { FC } from 'react';
import { CommonProps } from '@/types';

export const LookingJob: FC<CommonProps> = ({ className }) => {
	return (
		<div className={className}>
			<dt>Ищет работу:</dt>
			<dd>Нет</dd>
		</div>
	);
};
