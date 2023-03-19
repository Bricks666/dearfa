import * as React from 'react';
import { popups } from '@/shared/configs';
import { CommonProps } from '@/shared/types';
import { UpdateInfoPopup } from '../UpdateInfoPopup';
import { UpdatePhotoPopup } from '../UpdatePhotoPopup';
import { UpdateStatusPopup } from '../UpdateStatusPopup';
import { usePopups } from './hooks';

export interface PopupsProps extends CommonProps {}

const popupsMap = {
	[popups.updateInfo]: UpdateInfoPopup,
	[popups.updateStatus]: UpdateStatusPopup,
	[popups.updatePhoto]: UpdatePhotoPopup,
};

export const Popups: React.FC<PopupsProps> = React.memo(function Popups() {
	const { mountedPopups, openPopups, } = usePopups();
	return (
		<>
			{mountedPopups.map((name) => {
				const Component = popupsMap[name];
				if (!Component) {
					return null;
				}
				return <Component isOpen={openPopups.includes(name)} key={name} />;
			})}
		</>
	);
});
