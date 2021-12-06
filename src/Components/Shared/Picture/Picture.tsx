import React from "react";
import classNames from "classnames";

import PictureStyle from "./Picture.module.css";

export const Picture = ({
	className,
	oneXSrc,
	twoXSrc,
	alt,
}: {
	className?: string;
	oneXSrc: string;
	twoXSrc?: string;
	alt: string;
}) => {
	return (
		<picture className={className ?? ""}>
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
