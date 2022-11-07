import * as React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { CommonProps, VoidFunction } from '@/types';

export interface MainPopupProps extends CommonProps {
	readonly isOpen: boolean;
	readonly onClose: VoidFunction;
	readonly title: string;
}

export const MainPopup: React.FC<React.PropsWithChildren<MainPopupProps>> = (
	props
) => {
	const { className, isOpen, onClose, title, children } = props;
	return (
		<Dialog open={isOpen} onClose={onClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent className={className}>{children}</DialogContent>
		</Dialog>
	);
};
