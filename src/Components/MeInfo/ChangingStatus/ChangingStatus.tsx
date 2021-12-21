import React, { FC, useCallback, useState } from "react";
import { ChangeStatus } from "./ChangeStatus/ChangeStatus";
import { PenButton, ModalWindow, Status } from "../../Shared";
import { useSetNewStatus } from "../../../Hooks";

import ChangingStatusStyle from "./ChangingStatus.module.css";

interface IChangingStatus {
	status: string;
}

export const ChangingStatus: FC<IChangingStatus> = ({ status }) => {
	const [showWindow, toggleShow] = useState<boolean>(false);
	const { setNewStatus } = useSetNewStatus();
	const onSubmit = useCallback(
		(formData) => {
			setNewStatus(formData);
			toggleShow(false);
		},
		[setNewStatus]
	);

	const toggle = useCallback(() => {
		toggleShow(!showWindow);
	}, [showWindow]);

	return (
		<>
			<Status status={status}>
				<PenButton
					onClick={toggle}
					className={ChangingStatusStyle.button}
					title="статус"
				/>
			</Status>
			<ModalWindow condition={showWindow} close={toggle}>
				<ChangeStatus onSubmit={onSubmit} status={status} />
			</ModalWindow>
		</>
	);
};
