import { Container, Stack } from '@mui/material';
import cn from 'classnames';
import * as React from 'react';
import { CommonProps } from '@/shared/types';

import styles from './main-layout.module.css';

export interface MainLayoutProps extends CommonProps, React.PropsWithChildren {
	readonly header: React.ReactElement;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
	const { header, className, children, } = props;

	return (
		<Stack className={styles.wrapper} spacing={2}>
			{header}
			<Container
				className={cn(styles.container, className)}
				maxWidth='xl'
				component='main'>
				{children}
			</Container>
		</Stack>
	);
};
