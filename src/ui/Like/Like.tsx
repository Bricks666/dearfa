import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { FormControlLabel, Checkbox } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import styles from './Like.module.css';
import { CommonProps, VoidFunction } from '@/types';

export interface LikeProps extends CommonProps {
	readonly count: number;
	readonly liked: boolean;
	readonly onChange: VoidFunction;
}

export const Like: React.FC<LikeProps> = (props) => {
	const { className, count, liked, onChange, } = props;
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
