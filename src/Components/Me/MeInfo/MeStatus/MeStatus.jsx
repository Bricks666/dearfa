import React, { useCallback, useState } from "react";

import { NewStatus } from "./NewStatus/NewStatus";
import { PenButton, ModalWindow, Status } from "../../../Shared";

import MeStatusStyle from "./MeStatus.module.css";

export const MeStatus = ({ status, setNewStatus }) => {
	const [showWindow, toggleShow] = useState(false);

	const onSubmit = (formData) => {
		setNewStatus(formData);
		toggleShow(false);
	};

	const toggle = useCallback(() => {
		toggleShow(!showWindow);
	}, [showWindow]);

	return (
		<>
			<Status status={status} className={MeStatusStyle.status}>
				<PenButton
					onClick={toggle}
					className={MeStatusStyle.button}
					penClass={MeStatusStyle.pen}
					title="статус"
				/>
			</Status>
			<ModalWindow condition={showWindow} close={toggle}>
				<NewStatus onSubmit={onSubmit} status={status} />
			</ModalWindow>
		</>
	);
};
