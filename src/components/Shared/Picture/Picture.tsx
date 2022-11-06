import React, { FC } from 'react';
import classNames from 'classnames';
import { URL } from '@/interfaces/common';
import { StandardProps } from '@/interfaces/components';

import PictureStyle from './Picture.module.css';

interface PictureProps extends StandardProps {
	readonly oneXSrc: URL | null;
	readonly twoXSrc?: URL | null;
	readonly alt: string;
}

export const Picture: FC<PictureProps> = ({
	className,
	oneXSrc,
	twoXSrc,
	alt,
}) => {
	return (
		<picture className={classNames(className)}>
			<source
				srcSet={`${oneXSrc ?? ''}.avif 1x,${twoXSrc ?? ''}.avif 2x`}
				type='image/avif'
			/>
			<source
				srcSet={`${oneXSrc ?? ''}.webp 1x,${twoXSrc ?? ''}.webp 2x`}
				type='image/webp'
			/>
			<img
				className={classNames(PictureStyle.photo, className)}
				src={`${oneXSrc ?? ''}.jpg 1x`}
				srcSet={`${twoXSrc ?? ''}.jpg 2x,`}
				alt={alt ?? ''}
			/>
		</picture>
	);
};
