import classNames from 'classnames';
import React, { FC } from 'react';
import { StandardProps } from '@/interfaces/components';

import CrossButtonStyle from './CrossButton.module.css';

interface CrossButtonProps extends StandardProps {
	readonly title: string;
}

export const CrossButton: FC<CrossButtonProps> = ({ className, title }) => {
	return (
		<button
			className={classNames(CrossButtonStyle.button, className)}
			title={title}
		/>
	);
};
