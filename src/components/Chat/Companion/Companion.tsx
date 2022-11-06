import cn from 'classnames';
import React, { FC } from 'react';
import { CommonProps } from '@/types';
import { Photo, FullName, Date } from '@/components/Shared';

import styles from './Companion.module.css';

interface CompanionProps extends CommonProps {
	readonly dialogId: number;
}

export const Companion: FC<CompanionProps> = ({ className, dialogId }) => {
	/* const { companion } = useCompanion(dialogId); */
	return (
		<header className={cn(styles.header, className)}>
			<Photo
				className={styles.photo}
				photo={/* companion.photo */ ''}
				fullName={/* companion.name */ ''}
				id={/* companion.id */ 0}
			/>
			<FullName className={styles.name} id={/* companion.id */ 0}>
				{/* companion.name */ ''}
			</FullName>
			<Date className={styles.date} date={/* companion.lastActive */ ''} />
		</header>
	);
};
