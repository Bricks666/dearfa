import React, { useCallback, useState } from "react";

import { NewStatus } from "./NewStatus/NewStatus";
import { PenButton, ModalWindow, Status } from "../../../Shared";
import { useSetNewStatus } from "../../../../Hooks";

import ChangingStatusStyle from "./ChangingStatus.module.css";

export const ChangingStatus = ({ status }) => {
	const [showWindow, toggleShow] = useState(false);
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
					penClass={ChangingStatusStyle.pen}
					title="статус"
				/>
			</Status>
			<ModalWindow condition={showWindow} close={toggle}>
				<NewStatus onSubmit={onSubmit} status={status} />
			</ModalWindow>
		</>
	);
};
