import React from "react";
import { Dialog } from "./Dialog/Dialog";

import DialogListStyle from "./DialogList.module.css";

function DialogList(props) {
    function RenderDialogsList(users) {
        return users.map((user) => {
            return (
                <Dialog
                    className={DialogListStyle.dialog}
                    name={user.name}
                    id={user.id}
                />
            );
        });
    }

    return (
        <ul
            className={`${props.className ?? ""} ${DialogListStyle.dialogList}`}
        >
            {RenderDialogsList(props.users)}
        </ul>
    );
}

export { DialogList };
