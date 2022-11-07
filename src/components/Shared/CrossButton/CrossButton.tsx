import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/types';

import styles from './CrossButton.module.css';

interface CrossButtonProps extends CommonProps {
	readonly title: string;
}

export const CrossButton: FC<CrossButtonProps> = ({ className, title }) => {
	return <button className={cn(styles.button, className)} title={title} />;
};
