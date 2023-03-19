import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { IconButton } from '@mui/material';
import { useUnit } from 'effector-react';
import * as React from 'react';
import { CommonProps } from '@/shared/types';
import { followModel } from '../../model';

export interface FollowButtonProps extends CommonProps {
	readonly userId: number;
}

export const FollowButton: React.FC<FollowButtonProps> = (props) => {
	const { userId, className, } = props;
	const follow = useUnit(followModel.mutation);

	const onClick = () => {
		follow.start({ userId, });
	};

	return (
		<IconButton
			className={className}
			onClick={onClick}
			disabled={follow.pending}>
			<PersonAddIcon />{' '}
		</IconButton>
	);
};
