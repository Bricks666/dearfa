import * as React from 'react';
import { Typography } from '@mui/material';
import { popups } from '@/consts';
import { CommonProps } from '@/types';
import { usePopups } from './hooks';

export interface PopupsProps extends CommonProps {}

const popupsMap = {
	[popups.updateInfo]: () => <Typography>Popup update info</Typography>,
};

export const Popups: React.FC<PopupsProps> = React.memo(function Popups() {
	const { mountedPopups, openPopups } = usePopups();
	return (
		<>
			{mountedPopups.map((name) => {
				const Component = popupsMap[name];
				if (!Component) {
					return null;
				}
				return <Component />;
			})}
		</>
	);
});
