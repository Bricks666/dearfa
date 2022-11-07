import * as React from 'react';
import { Route } from 'atomic-router-react';
import { routes } from '@/routes';
import { CommonProps } from '@/types';

export interface AppRoutesProps extends CommonProps {}

export const AppRoutes: React.FC<AppRoutesProps> = React.memo(
	function AppRoutes(props) {
		const { className } = props;
		return (
			<div className={className}>
				{routes.map(({ Component, path, route }) => {
					return <Route route={route} view={Component} key={path} />;
				})}
			</div>
		);
	}
);
