import { Avatar, Typography } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import styles from './Companion.module.css';
import { CommonProps } from '@/types';
import { Date } from '@/ui';
// import { FullName, Date } from '@/ui';

export interface CompanionProps extends CommonProps {
	readonly dialogId: number;
}

export const Companion: React.FC<CompanionProps> = (props) => {
	const { className, /* dialogId, */ } = props;
	/* const { companion } = useCompanion(dialogId); */
	return (
		<header className={cn(styles.header, className)}>
			<Avatar className={styles.photo} />
			<Typography className={styles.name}>
				asd
				{/* companion.name */ ''}
			</Typography>
			<Date className={styles.date} date={/* companion.lastActive */ ''} />
		</header>
	);
};
