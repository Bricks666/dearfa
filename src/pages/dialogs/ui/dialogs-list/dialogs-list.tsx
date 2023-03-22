import { List } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import {
	DialogItem,
	dialogsModel,
	SkeletonDialogItem
} from '@/entities/dialogs';
import { getEmptyArray } from '@/shared/lib';
import { CommonProps } from '@/shared/types';
import { pageModel } from '../../models';

export interface DialogsListProps extends CommonProps {}

export const DialogsList: React.FC<DialogsListProps> = (props) => {
	const { className, } = props;
	const dialogs = useUnit(dialogsModel.query);
	const id = useUnit(pageModel.$id);

	let items;
	const { data, pending, stale, } = dialogs;
	if (pending && !stale) {
		items = getEmptyArray(5).map((_, i) => <SkeletonDialogItem key={i} />);
	} else {
		items = data.map((dialog) => (
			<DialogItem
				{...dialog}
				selected={dialog.id === Number(id)}
				key={dialog.id}
			/>
		));
	}

	return <List className={className}>{items}</List>;
};
