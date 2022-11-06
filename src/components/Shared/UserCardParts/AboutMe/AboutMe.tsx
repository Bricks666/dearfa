import React, { FC } from 'react';
import { CommonProps } from '@/types';
import { DataListItem } from '../..';

interface AboutMeProps extends CommonProps {
	readonly aboutMe: string;
}
export const AboutMe: FC<AboutMeProps> = ({ className, aboutMe }) => {
	return (
		<DataListItem className={className} term='Обо мне:' description={aboutMe} />
	);
};
