import React, { FC, useEffect } from "react";
import classNames from "classnames";

import { useLoading, useDialogsList } from "../../Hooks/";
import { IOnlyClassComponent } from "../../Types/Common";
import { Dialog } from "./Dialog/Dialog";

import DialogListStyle from "./DialogList.module.css";

const DialogList: FC<IOnlyClassComponent> = ({ className }) => {
	const { dialogs, loadDialogs } = useDialogsList();
	const LoadingWrapper = useLoading("loadingDialogs");

	useEffect(() => {
		loadDialogs();
	}, [loadDialogs]);

	return (
		<LoadingWrapper className={className}>
			<ul className={classNames(DialogListStyle.dialogList, className)}>
				{dialogs.map((dialog) => (
					<Dialog
						className={DialogListStyle.dialog}
						{...dialog}
						key={dialog.id}
					/>
				))}
			</ul>
		</LoadingWrapper>
	);
};

export { DialogList };
