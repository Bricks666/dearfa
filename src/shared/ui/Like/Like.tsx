import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { FormControlLabel, Checkbox } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps, VoidFunction } from '@/shared/types';
import styles from './Like.module.css';

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
