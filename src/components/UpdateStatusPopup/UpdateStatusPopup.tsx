// import cn from 'classnames';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { BasePopupProps, CommonProps } from '@/shared/types';
import { MainPopup } from '@/shared/ui';
import { UpdateStatusForm } from './UpdateStatusForm';
// import styles from './UpdateStatusPopup.module.css';
import { getStatusQuery } from '@/models/profile';
import { closeUpdateStatusPopup } from '@/models/routing';

export interface UpdateStatusPopupProps extends CommonProps, BasePopupProps {}

export const UpdateStatusPopup: React.FC<UpdateStatusPopupProps> = React.memo(
	function UpdateStatusPopup(props) {
		const { className, isOpen, } = props;
		const status = useUnit(getStatusQuery.$data);
		return (
			<MainPopup
				className={className}
				isOpen={isOpen}
				onClose={() => closeUpdateStatusPopup()}
				title='Обновление статуса'>
				{status ? <UpdateStatusForm defaultValues={{ status, }} /> : null}
			</MainPopup>
		);
	}
);
