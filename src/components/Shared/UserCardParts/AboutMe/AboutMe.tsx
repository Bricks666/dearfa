import React, { FC } from "react";
import { StandardProps } from "@/interfaces/components";
import { DataListItem } from "../..";

interface AboutMeProps extends StandardProps {
	readonly aboutMe: string;
}
export const AboutMe: FC<AboutMeProps> = ({ className, aboutMe }) => {
	return (
		<DataListItem className={className} term="Обо мне:" description={aboutMe} />
	);
};
