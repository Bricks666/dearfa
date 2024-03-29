import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import * as React from 'react';
import { BasePopupProps, CommonProps, VoidFunction } from '@/shared/types';

export interface MainPopupProps extends CommonProps, BasePopupProps {
	readonly onClose: VoidFunction;
	readonly title: string;
}

export const MainPopup: React.FC<React.PropsWithChildren<MainPopupProps>> = (
	props
) => {
	const { className, isOpen, onClose, title, children, } = props;
	return (
		<Dialog open={isOpen} onClose={onClose}>
			<DialogTitle align='center'>{title}</DialogTitle>
			<DialogContent className={className}>{children}</DialogContent>
		</Dialog>
	);
};
