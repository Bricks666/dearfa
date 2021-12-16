import React, { FC } from "react";
import classNames from "classnames";
import { DialogList } from "./DialogList/DialogList";
import { Chat } from "./Chat/Chat";
import { SectionHeader } from "../Shared";
import { IOnlyClassComponent } from "../../Types/Common";

import DialogsStyle from "./Dialogs.module.css";

export const Dialogs: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(DialogsStyle.dialogs, className)}>
			<SectionHeader className={DialogsStyle.heading}>Диалоги</SectionHeader>
			<DialogList className={DialogsStyle.dialogList} />
			<Chat className={DialogsStyle.chat} />
		</main>
	);
};
