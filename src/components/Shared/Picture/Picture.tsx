import React, { FC } from 'react';
import cn from 'classnames';
import { URL } from '@/types';
import { CommonProps } from '@/types';

import styles from './Picture.module.css';

interface PictureProps extends CommonProps {
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
		<picture className={cn(className)}>
			<source
				srcSet={`${oneXSrc ?? ''}.avif 1x,${twoXSrc ?? ''}.avif 2x`}
				type='image/avif'
			/>
			<source
				srcSet={`${oneXSrc ?? ''}.webp 1x,${twoXSrc ?? ''}.webp 2x`}
				type='image/webp'
			/>
			<img
				className={cn(styles.photo, className)}
				src={`${oneXSrc ?? ''}.jpg 1x`}
				srcSet={`${twoXSrc ?? ''}.jpg 2x,`}
				alt={alt ?? ''}
			/>
		</picture>
	);
};
