import cn from 'classnames';
import * as React from 'react';
import styles from './Picture.module.css';
import { URL, CommonProps } from '@/types';

interface PictureProps extends CommonProps {
	readonly oneXSrc: URL | null;
	readonly twoXSrc?: URL | null;
	readonly alt: string;
}

export const Picture: React.FC<PictureProps> = (props) => {
	const { className, oneXSrc, twoXSrc, alt, } = props;
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
