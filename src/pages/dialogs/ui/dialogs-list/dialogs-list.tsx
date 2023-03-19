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

export interface DialogsListProps extends CommonProps {}

export const DialogsList: React.FC<DialogsListProps> = (props) => {
	const { className, } = props;
	const dialogs = useUnit(dialogsModel.query);

	let items;
	const { data, pending, } = dialogs;
	if (pending) {
		items = getEmptyArray(5).map((_, i) => <SkeletonDialogItem key={i} />);
	} else {
		items = data.map((dialog) => <DialogItem {...dialog} key={dialog.id} />);
	}

	return <List className={className}>{items}</List>;
};
