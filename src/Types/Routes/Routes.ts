import { ComponentType } from "react";
import { IOnlyClassComponent, URL } from "../Common";

export interface IRoutes {
	Component: ComponentType<IOnlyClassComponent>;
	path: URL;
}
