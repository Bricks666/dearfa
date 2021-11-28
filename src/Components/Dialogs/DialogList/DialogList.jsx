import React, { useEffect } from "react";
import classNames from "classnames";

import { renderDialogsList } from "./RenderDialogsList";
import { useLoading, useDialogsList } from "../../../Hooks/";

import DialogListStyle from "./DialogList.module.css";

const DialogList = ({ className }) => {
	const { dialogs, loadDialogs } = useDialogsList();
	const { LoadingWrapper } = useLoading("loadingDialogs");

	useEffect(() => {
		loadDialogs();
	}, [loadDialogs]);

	return (
		<LoadingWrapper className={className}>
			<ul className={classNames(DialogListStyle.dialogList, className)}>
				{renderDialogsList(dialogs, DialogListStyle.dialog)}
			</ul>
		</LoadingWrapper>
	);
};

export { DialogList };
