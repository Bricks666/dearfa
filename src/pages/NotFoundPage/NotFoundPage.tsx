import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { StandardProps } from '@/interfaces/components';

export const NotFoundPage: FC<StandardProps> = ({ className }) => {
	return (
		<Box className={className}>
			<Typography variant='h2' align='center'>
				Страница не найдена
			</Typography>
		</Box>
	);
};
