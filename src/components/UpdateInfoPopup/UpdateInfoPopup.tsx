import { useUnit } from 'effector-react';
import * as React from 'react';
// import cn from 'classnames';
import { UpdateInfoParams } from '@/shared/api/profile';
import { UpdateInfoForm } from './UpdateInfoForm';
import { getInfoQuery } from '@/models/profile';
import { closeUpdateInfoPopup } from '@/models/routing';
import { BasePopupProps, CommonProps } from '@/types';
import { MainPopup } from '@/ui';

// import styles from './UpdateInfoPopup.module.css';

export interface UpdateInfoPopupProps extends CommonProps, BasePopupProps {}

export const UpdateInfoPopup: React.FC<UpdateInfoPopupProps> = React.memo(
	function UpdateInfoPopup(props) {
		const { className, isOpen, } = props;
		const info = useUnit(getInfoQuery.$data);

		const defaultValues = React.useMemo<UpdateInfoParams | null>(() => {
			if (!info) {
				return null;
			}

			return {
				aboutMe: info.aboutMe,
				contacts: info.contacts,
				fullName: info.fullName,
				lookingForAJob: info.lookingForAJob,
				lookingForAJobDescription: info.lookingForAJobDescription,
			};
		}, [info]);

		return (
			<MainPopup
				className={className}
				isOpen={isOpen}
				onClose={() => closeUpdateInfoPopup()}
				title='Обновление данных профиля'>
				{defaultValues ? (
					<UpdateInfoForm defaultValues={defaultValues} />
				) : null}
			</MainPopup>
		);
	}
);
