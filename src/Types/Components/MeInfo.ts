import { IFormInner, IOnlyClassComponent } from ".";
import { FormSubmitHandler, ID, URLorNull } from "../Common";
import { IContacts, IProfileState } from "../Redux";

export interface IMeInfoComponent extends IOnlyClassComponent {
	user: IProfileState;
}

interface IChangePhoto {
	photo: URLorNull;
	newPhotoURL: URLorNull;
	newPhoto: File | null;
}

type ChangeProfileFormValues = {
	userId: ID;
	name: string;
	aboutMe: string;
	photo: IChangePhoto;
} & IContacts;

export interface IChangeProfileComponent extends IOnlyClassComponent {
	onSubmit: FormSubmitHandler<ChangeProfileFormValues>;
}

export type ChangeProfileInitial = Partial<ChangeProfileFormValues>;

export type ChangeProfileForm = IFormInner<ChangeProfileFormValues>;

export interface IChangedPhotoComponent
	extends IOnlyClassComponent,
		Omit<IChangePhoto, "newPhoto"> {}

type ChangeStatusFormValues = {
	status: string;
};

export interface IChangeStatusComponent extends IOnlyClassComponent {
	onSubmit: FormSubmitHandler<ChangeStatusFormValues>;
	status: string;
}

export type ChangeStatusFormComponent = IFormInner<ChangeStatusFormValues>;
