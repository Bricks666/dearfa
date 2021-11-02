import React, { useEffect } from "react";
import { DialogList } from "./DialogList/DialogList";
import { SectionHeader } from "../Shared/SectionHeader/SectionHeader";
import { ChatConnect } from "./Chat/ChatConnect";

import DialogsStyle from "./Dialogs.module.css";

export const Dialogs = React.memo(({ dialogs, className, loadDialogs }) => {
	useEffect(() => {
		loadDialogs();
	}, []);

	return (
		<main className={`${DialogsStyle.dialogs} ${className ?? ""} `}>
			<SectionHeader className={DialogsStyle.heading}>Диалоги</SectionHeader>
			<DialogList className={DialogsStyle.dialogList} dialogs={dialogs} />
			<ChatConnect className={DialogsStyle.chat} />
		</main>
	);
});
