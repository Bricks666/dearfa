import React, { memo } from "react";
import { DialogList } from "./DialogList/DialogList";
import { Chat } from "./Chat/Chat";
import { SectionHeader } from "../Shared";
import classNames from "classnames";

import DialogsStyle from "./Dialogs.module.css";

export const Dialogs = memo(({ className }) => {
	return (
		<main className={classNames(DialogsStyle.dialogs, className)}>
			<SectionHeader className={DialogsStyle.heading}>Диалоги</SectionHeader>
			<DialogList className={DialogsStyle.dialogList} />
			<Chat className={DialogsStyle.chat} />
		</main>
	);
});
