import cn from 'classnames';
import React, { FC } from 'react';
import { CommonProps } from '@/types';

import styles from './PenButton.module.css';

interface PenButtonProps extends CommonProps {
	readonly title: string;
}

const PenButton: FC<PenButtonProps> = ({ className, title }) => {
	return (
		<button
			className={cn(styles.button, className)}
			title={title}
			type='button'
		/>
	);
};

export { PenButton };
