import classNames from "classnames";
import React, { FC } from "react";

import { Link } from "react-router-dom";
import { IOnlyClassComponent, URL } from "../../../../Types/Common";

import ButtonLinkStyle from "./ButtonLink.module.css";

interface IButtonLink extends IOnlyClassComponent {
	to: URL;
}

export const ButtonLink: FC<IButtonLink> = ({ className, children, to }) => {
	return (
		<Link className={classNames(ButtonLinkStyle.link, className)} to={to}>
			{children}
		</Link>
	);
};
