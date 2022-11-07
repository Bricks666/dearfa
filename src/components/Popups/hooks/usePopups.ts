import { useEffect, useMemo, useState } from 'react';
import { useUnit } from 'effector-react';
import { $popup } from '@/models/routing';

const parsePopups = (rawPopups: string) => {
	return rawPopups.split(',');
};

export const usePopups = () => {
	const rawPopups = useUnit($popup);
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
