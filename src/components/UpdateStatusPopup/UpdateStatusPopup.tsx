import * as React from 'react';
import cn from 'classnames';
import { useUnit } from 'effector-react';
import { getStatusQuery } from '@/models/profile';
import { closeUpdateStatusPopup } from '@/models/routing';
import { BasePopupProps, CommonProps } from '@/types';
import { MainPopup } from '@/ui';
import { UpdateStatusForm } from './UpdateStatusForm';

import styles from './UpdateStatusPopup.module.css';

export interface UpdateStatusPopupProps extends CommonProps, BasePopupProps {}

export const UpdateStatusPopup: React.FC<UpdateStatusPopupProps> = React.memo(
	function UpdateStatusPopup(props) {
		const { className, isOpen } = props;
		const status = useUnit(getStatusQuery.$data);
		return (
			<MainPopup
				className={className}
				isOpen={isOpen}
				onClose={() => closeUpdateStatusPopup()}
				title='Обновление статуса'>
				{status ? <UpdateStatusForm defaultValues={{ status }} /> : null}
			</MainPopup>
		);
	}
);
