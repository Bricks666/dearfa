import { useUnit } from 'effector-react';
import { useEffect, useMemo, useState } from 'react';
import { popupsModel } from '@/entities/popups';

const parsePopups = (rawPopups: string) => {
	return rawPopups.split(',');
};

export const usePopups = () => {
	const rawPopups = useUnit(popupsModel.$popups);
	const [mountedPopups, setMountedPopups] = useState(() =>
		parsePopups(rawPopups)
	);

	useEffect(() => {
		const id = setTimeout(() => setMountedPopups(parsePopups(rawPopups)), 300);

		return () => {
			clearTimeout(id);
		};
	}, [rawPopups]);

	const openPopups = useMemo(() => parsePopups(rawPopups), [rawPopups]);

	return {
		mountedPopups,
		openPopups,
	};
};
