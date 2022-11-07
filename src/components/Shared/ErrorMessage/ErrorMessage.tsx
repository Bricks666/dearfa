import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/types';

import styles from './ErrorMessage.module.css';

const ErrorMessage: FC<CommonProps> = ({ className, children }) => {
	return <div className={cn(styles.errorMessage, className)}>{children}</div>;
};

export { ErrorMessage };
