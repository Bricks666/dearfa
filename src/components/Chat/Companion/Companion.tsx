import { StandardProps } from "@/interfaces/components";
import classNames from "classnames";
import React, { FC } from "react";
import { Photo, FullName, Date } from "@/components/Shared";

import CompanionStyle from "./Companion.module.css";

interface CompanionProps extends StandardProps {
	readonly dialogId: number;
}

export const Companion: FC<CompanionProps> = ({ className, dialogId }) => {
	/* const { companion } = useCompanion(dialogId); */
	return (
		<header className={classNames(CompanionStyle.header, className)}>
			<Photo
				className={CompanionStyle.photo}
				photo={/* companion.photo */ ""}
				fullName={/* companion.name */ ""}
				id={/* companion.id */ 0}
			/>
			<FullName className={CompanionStyle.name} id={/* companion.id */ 0}>
				{/* companion.name */ ""}
			</FullName>
			<Date
				className={CompanionStyle.date}
				date={/* companion.lastActive */ ""}
			/>
		</header>
	);
};
