import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { IconButton } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { unfollowModel } from '../../model';

export interface UnfollowButtonProps extends CommonProps {
	readonly userId: number;
}

export const UnfollowButton: React.FC<UnfollowButtonProps> = (props) => {
	const { userId, className, } = props;
	const unfollow = useUnit(unfollowModel.mutation);

	const onClick = () => {
		unfollow.start({ userId, });
	};

	return (
		<IconButton
			className={className}
			onClick={onClick}
			disabled={unfollow.pending}>
			<PersonRemoveIcon />{' '}
		</IconButton>
	);
};
