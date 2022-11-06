import * as React from 'react';
import cn from 'classnames';
import { useQuery } from '@farfetched/react';
import { getDialogsQuery } from '@/models/dialogs';
import { CommonProps } from '@/types';
import { DialogCard } from './Dialog/Dialog';

import styles from './DialogsList.module.css';

const DialogsList: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const { data: dialogs } = useQuery(getDialogsQuery);
	/** TODO: Добавить загрузку */

	return (
		<ul className={cn(styles.dialogList, className)}>
			{dialogs?.map((dialog) => (
				<DialogCard className={styles.dialog} {...dialog} key={dialog.id} />
			))}
		</ul>
	);
});

export { DialogsList };
