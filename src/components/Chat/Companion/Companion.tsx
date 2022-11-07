import * as React from 'react';
import cn from 'classnames';
import { Avatar } from '@mui/material';
import { CommonProps } from '@/types';
import { FullName, Date } from '@/ui';

import styles from './Companion.module.css';

export interface CompanionProps extends CommonProps {
	readonly dialogId: number;
}

export const Companion: React.FC<CompanionProps> = (props) => {
	const { className, dialogId } = props;
	/* const { companion } = useCompanion(dialogId); */
	return (
		<header className={cn(styles.header, className)}>
			<Avatar className={styles.photo} />
			<FullName className={styles.name} id={/* companion.id */ 0}>
				{/* companion.name */ ''}
			</FullName>
			<Date className={styles.date} date={/* companion.lastActive */ ''} />
		</header>
	);
};
