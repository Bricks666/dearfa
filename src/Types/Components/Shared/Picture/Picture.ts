import { IOnlyClassComponent } from "../../";
import { URL } from "../../../Common";

export interface IPictureComponent extends IOnlyClassComponent {
	oneXSrc: URL;
	twoXSrc?: URL;
	alt: string;
}
