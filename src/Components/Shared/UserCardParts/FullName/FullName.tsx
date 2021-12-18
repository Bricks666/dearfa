import classNames from "classnames";
import React, { FC } from "react";

import { Link } from "react-router-dom";
import { ID, IOnlyClassComponent } from "../../../../Types/Common";

import FullNameStyle from "./FullName.module.css";

interface IFullName extends IOnlyClassComponent {
	id: ID;
}

export const FullName: FC<IFullName> = ({ id, className, children }) => {
	return (
		<Link
			className={classNames(FullNameStyle.link, className)}
			to={`/profile/${id}`}
		>
			<h4 className={FullNameStyle.name}>{children}</h4>
		</Link>
	);
};
