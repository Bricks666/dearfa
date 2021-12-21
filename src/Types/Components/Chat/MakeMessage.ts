import { IFormInner, IOnlyClassComponent } from "..";
import { ID } from "../../Common";

export interface IMakeMessageComponent extends IOnlyClassComponent {
	dialogId: ID;
}
interface IFormValues {
	message: string;
}

export type MakeMessageFromComponent = IFormInner<IFormValues>;
