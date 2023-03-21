import * as React from 'react';
import { BasePopupProps, CommonProps } from '@/shared/types';
import { usePopups } from './lib';

export interface PopupsProps extends CommonProps {
	readonly popupsMap: Record<string, React.ComponentType<BasePopupProps>>;
}

export const Popups: React.FC<PopupsProps> = React.memo(function Popups(props) {
	const { popupsMap, } = props;
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
