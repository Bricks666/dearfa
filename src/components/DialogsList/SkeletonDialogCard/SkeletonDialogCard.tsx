import * as React from 'react';
import { Avatar, Card, CardHeader, Skeleton, Typography } from '@mui/material';
import { CommonProps } from '@/types';

export interface SkeletonDialogCardProps extends CommonProps {}

export const SkeletonDialogCard: React.FC<SkeletonDialogCardProps> = React.memo(
	function SkeletonDialogCard(props) {
		const { className } = props;
		return (
			<Card className={className}>
				<CardHeader
					avatar={
						<Skeleton>
							<Avatar />
						</Skeleton>
					}
					title={
						<Typography>
							<Skeleton width='50%' />
						</Typography>
					}
				/>
			</Card>
		);
	}
);
