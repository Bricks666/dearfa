import React, { FC } from "react";
import { DataListItem } from "../..";
import { IOnlyClassComponent } from "../../../../Types/Common";

interface IAboutMe extends IOnlyClassComponent {
	aboutMe: string;
}
export const AboutMe: FC<IAboutMe> = ({ className, aboutMe }) => {
	return <DataListItem className={className} term="Обо мне:" desc={aboutMe} />;
};
