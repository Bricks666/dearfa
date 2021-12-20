import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IFullNameComponent } from "../../../../Types/Components";

import FullNameStyle from "./FullName.module.css";

export const FullName: FC<IFullNameComponent> = ({
	id,
	className,
	children,
}) => {
	return (
		<Link
			className={classNames(FullNameStyle.link, className)}
			to={`/profile/${id}`}
		>
			<h4 className={FullNameStyle.name}>{children}</h4>
		</Link>
	);
};
