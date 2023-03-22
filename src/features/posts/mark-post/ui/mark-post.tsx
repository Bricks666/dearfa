import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { Post } from '@/shared/api';
import { CommonProps } from '@/shared/types';
import { Checkbox } from '@/shared/ui';
import { dislikePostModel, likePostModel } from '../model';

export interface MarkPostProps
	extends CommonProps,
		Pick<Post, 'id' | 'liked' | 'likeCount'> {}

export const MarkPost: React.FC<MarkPostProps> = (props) => {
	const { id, likeCount, liked, className, } = props;
	const like = useUnit(likePostModel.mutation);
	const dislike = useUnit(dislikePostModel.mutation);

	const onLike = () => {
		like.start({ id, });
	};

	const onDislike = () => {
		dislike.start({ id, });
	};

	const onChange = liked ? onDislike : onLike;

	return (
		<Checkbox
			className={className}
			name='like'
			onChange={onChange}
			icon={<FavoriteBorder />}
			checkedIcon={<Favorite />}
			color='error'
			checked={liked}
			label={likeCount.toString()}
		/>
	);
};
