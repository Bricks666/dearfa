import React, { FC } from "react";
import classNames from "classnames";
import { IOnlyClassComponent } from "../../Types/Common";
import { SectionHeader } from "../../Components/Shared";
import { DialogList } from "../../Components/DialogList";
import { Chat } from "../../Components/Chat";

import DialogsPageStyle from "./DialogsPage.module.css";
import { Route, Routes } from "react-router-dom";

export const DialogsPage: FC<IOnlyClassComponent> = ({ className }) => {
	return (
		<main className={classNames(DialogsPageStyle.dialogs, className)}>
			<SectionHeader className={DialogsPageStyle.heading}>
				Диалоги
			</SectionHeader>
			<DialogList className={DialogsPageStyle.dialogList} />
			<Routes>
				<Route
					path=":id"
					element={<Chat className={DialogsPageStyle.chat} />}
				/>
			</Routes>
		</main>
	);
};
