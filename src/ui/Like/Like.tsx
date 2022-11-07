import * as React from 'react';
import cn from 'classnames';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { CommonProps, VoidFunction } from '@/types';

import styles from './Like.module.css';

export interface LikeProps extends CommonProps {
	readonly count: number;
	readonly liked: boolean;
	readonly onChange: VoidFunction;
}

export const Like: React.FC<LikeProps> = (props) => {
	const { className, count, liked, onChange } = props;
	return (
		<FormControlLabel
			control={
				<Checkbox
					className={cn(styles.like, className)}
					onChange={onChange}
					value={liked}
					icon={<FavoriteBorder />}
					checkedIcon={<Favorite />}
				/>
			}
			label={count}
		/>
	);
};
