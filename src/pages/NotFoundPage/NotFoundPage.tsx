import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { CommonProps } from '@/types';

export const NotFoundPage: FC<CommonProps> = ({ className }) => {
	return (
		<Box className={className}>
			<Typography variant='h2' align='center'>
				Страница не найдена
			</Typography>
		</Box>
	);
};
