import React, { FC, useCallback, useState } from 'react';
import { ChangeStatus } from './ChangeStatus/ChangeStatus';
import { PenButton, ModalWindow, Status } from '@/components/Shared';

import styles from './ChangingStatus.module.css';

interface ChangingStatusProps {
	readonly status: string;
}

export const ChangingStatus: FC<ChangingStatusProps> = ({ status }) => {
	const [showWindow, toggleShow] = useState<boolean>(false);
	const onSubmit = useCallback(
		(formData: string) => {
			updateStatusThunk(formData);
			toggleShow(false);
		},
		[dispatch]
	);

	const toggle = useCallback(() => {
		toggleShow(!showWindow);
	}, [showWindow]);

	return (
		<>
			<Status status={status}>
				<PenButton
					/* onClick={toggle} */
					className={styles.button}
					title='статус'
				/>
			</Status>
			<ModalWindow condition={showWindow} close={toggle}>
				<ChangeStatus /* onSubmit={onSubmit} status={status}  */ />
			</ModalWindow>
		</>
	);
};
