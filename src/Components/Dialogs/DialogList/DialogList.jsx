import React from "react";
import { renderDialogsList } from "./RenderDialogsList";

import DialogListStyle from "./DialogList.module.css";

function DialogList(props) {
	return (
		<ul className={`${props.className ?? ""} ${DialogListStyle.dialogList}`}>
			{renderDialogsList(props.dialogs, DialogListStyle.dialog)}
		</ul>
	);
}

export { DialogList };
