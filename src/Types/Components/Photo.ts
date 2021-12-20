import { IOnlyClassComponent } from ".";
import { ID, URLorNull } from "../Common";

export interface IPhotoComponent extends IOnlyClassComponent {
	id: ID;
	photo: URLorNull;
	fullName: string;
}
