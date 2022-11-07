import * as React from 'react';
import cn from 'classnames';
import { CommonProps } from '@/types';

import styles from './Loading.module.css';

export const Loading: FC<CommonProps> = ({ className }) => {
	return (
		<div className={cn(styles.wrapper, className)}>
			<div className={styles.loading} />
		</div>
	);
};
