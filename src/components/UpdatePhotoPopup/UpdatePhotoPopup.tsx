// import cn from 'classnames';
import { useStoreMap } from 'effector-react';
import * as React from 'react';
import { BasePopupProps, CommonProps } from '@/shared/types';
import { MainPopup } from '@/shared/ui';
import { UpdatePhotoForm } from './UpdatePhotoForm';
// import styles from './UpdatePhotoPopup.module.css';
import { getInfoQuery } from '@/models/profile';
import { closeUpdatePhotoPopup } from '@/models/routing';

export interface UpdatePhotoPopupProps extends CommonProps, BasePopupProps {}

export const UpdatePhotoPopup: React.FC<UpdatePhotoPopupProps> = React.memo(
	function UpdatePhotoPopup(props) {
		const { className, isOpen, } = props;
		const photo = useStoreMap({
			store: getInfoQuery.$data,
			fn: (info) => {
				return info?.photos.large;
			},
			defaultValue: '',
			keys: [],
		});
		return (
			<MainPopup
				className={className}
				isOpen={isOpen}
				onClose={() => closeUpdatePhotoPopup()}
				title='Обновление фотографии'>
				<UpdatePhotoForm defaultValues={{ photo, }} />
			</MainPopup>
		);
	}
);
