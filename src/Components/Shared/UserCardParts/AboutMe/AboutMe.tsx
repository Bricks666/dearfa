import React from "react";
import { DataListItem } from "../..";

export const AboutMe = ({ className, aboutMe }) => {
	return <DataListItem className={className} term="Обо мне:" desc={aboutMe} />;
};
