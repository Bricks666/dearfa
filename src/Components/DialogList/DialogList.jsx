import React from "react";
import { RenderDialogsList } from "./RenderDialogsList";

import DialogListStyle from "./DialogList.module.css";

function DialogList(props) {
    return (
        <ul
            className={`${props.className ?? ""} ${DialogListStyle.dialogList}`}
        >
            {RenderDialogsList(props.dialogs, DialogListStyle.dialog)}
        </ul>
    );
}

export { DialogList };
