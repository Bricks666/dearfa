import * as React from 'react';
import { Stack } from '@mui/material';
import { useUnit } from 'effector-react';
import { getDialogsQuery } from '@/models/dialogs';
import { getEmptyArray } from '@/consts';
import { CommonProps } from '@/types';
import { DialogCard } from './DialogCard';
import { SkeletonDialogCard } from './SkeletonDialogCard';

export const DialogsList: React.FC<CommonProps> = React.memo((props) => {
	const { className } = props;
	const dialogs = useUnit(getDialogsQuery.$data);

	const isLoading = !dialogs;

	const items = isLoading
		? getEmptyArray(6).map((_, i) => <SkeletonDialogCard key={i} />)
		: dialogs.map((dialog) => <DialogCard {...dialog} key={dialog.id} />);

	return (
		<Stack className={className} spacing={1.5}>
			{items}
		</Stack>
	);
});
