import React from "react";

import { Dialog } from "./Dialog/Dialog";

export const renderDialogsList = (dialogs, className) => {
	return dialogs.map((dialog) => {
		return (
			<Dialog className={className} {...dialog} key={dialog.id} />
		);
	});
};
