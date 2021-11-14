import React from "react";
import { renderDialogsList } from "./RenderDialogsList";

import DialogListStyle from "./DialogList.module.css";

const DialogList = (props) => {
	return (
		<ul className={`${DialogListStyle.dialogList} ${props.className ?? ""} `}>
			{renderDialogsList(props.dialogs, DialogListStyle.dialog)}
		</ul>
	);
};

export { DialogList };
