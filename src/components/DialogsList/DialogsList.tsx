import React, { FC } from 'react';
import classNames from 'classnames';
import { useDialogsList } from '@/hooks';
import { DialogCard } from './Dialog/Dialog';
import { StandardProps } from '@/interfaces/components';

import DialogsListStyle from './DialogsList.module.css';

const DialogsList: FC<StandardProps> = ({ className }) => {
	const dialogs = useDialogsList();
	/** TODO: Добавить загрузку */
	return (
		<ul className={classNames(DialogsListStyle.dialogList, className)}>
			{dialogs.map((dialog) => (
				<DialogCard
					className={DialogsListStyle.dialog}
					{...dialog}
					key={dialog.id}
				/>
			))}
		</ul>
	);
};

export { DialogsList };
