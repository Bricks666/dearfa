import * as React from 'react';
import { FollowButton, UnfollowButton } from '@/features/following';
import { TemplateUserItem } from '@/entities/users';
import { User } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface UserItemProps extends CommonProps, User {}

export const UserItem: React.FC<UserItemProps> = (props) => {
	const { followed, ...rest } = props;

	const actions = followed ? (
		<UnfollowButton userId={rest.id} />
	) : (
		<FollowButton userId={rest.id} />
	);

	return <TemplateUserItem {...rest} actions={actions} />;
};
