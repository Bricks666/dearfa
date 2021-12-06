import React, { FC } from "react";
import { DialogList } from "./DialogList/DialogList";
import { Chat } from "./Chat/Chat";
import { SectionHeader } from "../Shared";
import classNames from "classnames";

import DialogsStyle from "./Dialogs.module.css";
import { IDialogs } from "../../types/Components/Dialogs";

export const Dialogs: FC<IDialogs> = ({ className }) => {
	return (
		<main className={classNames(DialogsStyle.dialogs, className)}>
			<SectionHeader className={DialogsStyle.heading}>Диалоги</SectionHeader>
			<DialogList className={DialogsStyle.dialogList} />
			<Chat className={DialogsStyle.chat} />
		</main>
	);
};
