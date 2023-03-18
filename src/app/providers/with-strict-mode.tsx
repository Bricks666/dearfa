import * as React from 'react';

export const WithStrictMode = (
	Component: React.ComponentType
): React.ComponentType => {
	return () => {
		return (
			<React.StrictMode>
				<Component />
			</React.StrictMode>
		);
	};
};
