import classNames from "classnames";
import React, { FC } from "react";
import { useCompanion } from "../../../Hooks";
import { IOnlyClassComponent } from "../../../Types/Common";
import { Photo, FullName, Date } from "../../Shared";

import CompanionStyle from "./Companion.module.css";

interface ICompanionComponent extends IOnlyClassComponent {
	dialogId: number;
}

export const Companion: FC<ICompanionComponent> = ({ className, dialogId }) => {
	const { companion } = useCompanion(dialogId);
	return (
		<header className={classNames(CompanionStyle.header, className)}>
			<Photo
				className={CompanionStyle.photo}
				photo={companion.photo}
				fullName={companion.name}
				id={companion.id}
			/>
			<FullName className={CompanionStyle.name} id={companion.id}>
				{companion.name}
			</FullName>
			<Date className={CompanionStyle.date} date={companion.lastActive} />
		</header>
	);
};
