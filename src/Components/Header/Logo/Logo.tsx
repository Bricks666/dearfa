import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ILogoComponent } from "../../../Types/Components";

import LogoStyle from "./Logo.module.css";

const Logo: FC<ILogoComponent> = ({ className, alt, src }) => {
	return (
		<Link className={classNames(LogoStyle.logo, className)} to="/">
			<img className={LogoStyle.image} src={src} alt={alt} />
		</Link>
	);
};

export { Logo };
