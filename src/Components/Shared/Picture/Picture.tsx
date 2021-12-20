import React, { FC } from "react";
import classNames from "classnames";
import { IOnlyClassComponent } from "../../../Types/Components";

import PictureStyle from "./Picture.module.css";

interface IPicture extends IOnlyClassComponent {
	oneXSrc: URLorNull;
	twoXSrc?: URLorNull;
	alt: string;
}

export const Picture: FC<IPicture> = ({ className, oneXSrc, twoXSrc, alt }) => {
	return (
		<picture className={classNames(className)}>
			<source
				srcSet={(oneXSrc ?? "") + ".avif 1x," + (twoXSrc ?? "") + ".avif 2x"}
				type="image/avif"
			></source>
			<source
				srcSet={(oneXSrc ?? "") + ".webp 1x," + (twoXSrc ?? "") + ".webp 2x"}
				type="image/webp"
			></source>
			<img
				className={classNames(PictureStyle.photo, className)}
				src={(oneXSrc ?? "") + ".jpg 1x"}
				srcSet={(twoXSrc ?? "") + ".jpg 2x,"}
				alt={alt ?? ""}
			/>
		</picture>
	);
};
