import * as React from 'react';
import { ChangeStatus } from './ChangeStatus/ChangeStatus';
import { PenButton, ModalWindow, Status } from '@/components/Shared';

import styles from './ChangingStatus.module.css';

interface ChangingStatusProps {
	readonly status: string;
}

export const ChangingStatus: React.FC<ChangingStatusProps> = React.memo(
	(props) => {
		const { status } = props;
		const [showWindow, toggleShow] = React.useState<boolean>(false);
		const onSubmit = React.useCallback((formData: string) => {
			toggleShow(false);
		}, []);

		const toggle = React.useCallback(() => {
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
	}
);
