import classNames from "classnames";
import React, { FC } from "react";
import { ISectionHeader } from "../../../types/Components/Shared/SectionHeader";

import SectionHeaderStyle from "./SectionHeader.module.css";

export const SectionHeader: FC<ISectionHeader> = ({ className, children }) => {
	return (
		<h2 className={classNames(SectionHeaderStyle.header, className)}>
			{children}
		</h2>
	);
};
