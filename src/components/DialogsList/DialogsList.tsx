import * as React from 'react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import { getDialogsQuery } from '@/models/dialogs';
import { CommonProps } from '@/types';
import { DialogCard } from './DialogCard/DialogCard';

import styles from './DialogsList.module.css';

export const DialogsList: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const dialogs = useUnit(getDialogsQuery.$data);
	/** TODO: Добавить загрузку */
	return (
		<ul className={cn(styles.dialogList, className)}>
			{dialogs?.map((dialog) => (
				<DialogCard className={styles.dialog} {...dialog} key={dialog.id} />
			))}
		</ul>
	);
});
