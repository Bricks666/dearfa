import React, { FC } from 'react';
import cn from 'classnames';
import { CommonProps } from '@/types';

import styles from './DataList.module.css';

/* TODO: Сделать, что бы в children могли быть только элементы DataListItem */
export const DataList: FC<CommonProps> = ({ className, children }) => {
	return <dl className={cn(styles.datalist, className)}>{children}</dl>;
};
