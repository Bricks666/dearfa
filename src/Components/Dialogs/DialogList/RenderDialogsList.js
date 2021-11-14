import React from "react";

import { DialogConnect } from "./Dialog/DialogConnect";

export const renderDialogsList = (dialogs, className) => {
	return dialogs.map((dialog) => {
		return (
			<DialogConnect className={className} {...dialog} key={dialog.id} />
		);
	});
};
