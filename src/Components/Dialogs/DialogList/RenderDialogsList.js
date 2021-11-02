import React from "react";

import { DialogContainer } from "./Dialog/DialogContainer";

export const renderDialogsList = (dialogs, className) => {
	return dialogs.map((dialog) => {
		return (
			<DialogContainer className={className} {...dialog} key={dialog.id} />
		);
	});
};
