import { IOnlyClassComponent } from ".";
import { URL } from "../Common";

export interface ILogoComponent extends IOnlyClassComponent {
	src: URL;
	alt: string;
}
