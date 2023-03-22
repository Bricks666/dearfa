import * as React from 'react';
import { MarkPost } from '@/features/posts';
import { TemplatePostCard } from '@/entities/posts';
import { Post } from '@/shared/api';
import { CommonProps } from '@/shared/types';

export interface PostCardProps extends CommonProps, Post {}

export const PostCard: React.FC<PostCardProps> = (props) => {
	return <TemplatePostCard {...props} actions={<MarkPost {...props} />} />;
};
