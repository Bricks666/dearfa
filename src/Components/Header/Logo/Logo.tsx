import classNames from "classnames";
import React, { FC } from "react";

import { Link } from "react-router-dom";
import { IOnlyClassComponent } from "../../../Types/Common";

import LogoStyle from "./Logo.module.css";

interface ILogo extends IOnlyClassComponent {
	alt: string;
	src: string;
}

const Logo: FC<ILogo> = ({ className, alt, src }) => {
	return (
		<Link className={classNames(LogoStyle.logo, className)} to="/">
			<img className={LogoStyle.image} src={src} alt={alt} />
		</Link>
	);
};

export { Logo };
