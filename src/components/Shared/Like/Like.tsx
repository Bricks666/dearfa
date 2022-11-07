import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/types';
import { Like as LikeModel } from '@/models/posts';

import styles from './Like.module.css';

interface LikeProps extends CommonProps {
	readonly status: LikeModel;
	readonly likeHandler: ChangeEventHandler<HTMLInputElement>;
}

export const Like: FC<LikeProps> = ({ className, status, likeHandler }) => {
	return (
		<label className={cn(styles.label, className)}>
			<input
				className={cn(styles.input, 'visibility-hidden')}
				type='checkbox'
				checked={status.liked}
				onChange={likeHandler}
			/>
			<span className={styles.like}>{status.count}</span>
		</label>
	);
};
