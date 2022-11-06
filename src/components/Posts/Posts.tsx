import * as React from 'react';
import cn from 'classnames';
import { CreatePost } from './CreatePost/CreatePost';
import { SubsectionHeader } from '../Shared';
import { CreatedPostsList } from '../CreatedPostsList';
import { CommonProps } from '@/types';

import styles from './Posts.module.css';

export const Posts: React.FC<CommonProps> = (props) => {
	const { className } = props;
	return (
		<section className={cn(styles.posts, className)}>
			<SubsectionHeader className={`${styles.heading}`}>
				Мои посты
			</SubsectionHeader>
			<CreatePost className={styles.makeMessage} />
			<CreatedPostsList />
		</section>
	);
};
