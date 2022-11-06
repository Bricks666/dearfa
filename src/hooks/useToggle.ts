import { useCallback, useState } from 'react';

export const useToggle = (defaultValue = false) => {
	const [toggled, setToggled] = useState(defaultValue);

	const onToggle = useCallback(() => {
		setToggled(!toggled);
	}, [toggled]);

	return {
		toggled,
		onToggle,
	};
};
