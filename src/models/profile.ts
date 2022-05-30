import {
	getProfileWithStatusApi,
	updatePhotoApi,
	updateStatusApi,
} from "@/api";
import { EmptyObject, Photos, URL } from "@/interfaces/common";
import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from "@reduxjs/toolkit";
import { Store } from ".";

export interface ProfileState {
	readonly info: ProfileInfo;
	readonly isLoading: boolean;
}

export interface ProfileInfo {
	readonly userId: number;
	readonly fullName: string;
	readonly photos: Photos;
	readonly contacts: Contacts | EmptyObject;
	readonly followed: boolean;
	readonly aboutMe: string;
	readonly lookingForAJob: boolean;
	readonly lookingForAJobDescription: string;
	readonly status: string;
}

export interface Contacts {
	readonly github: URL | null;
	readonly facebook: URL | null;
	readonly twitter: URL | null;
	readonly youtube: URL | null;
	readonly vk: URL | null;
	readonly website: URL | null;
	readonly mailLink: URL | null;
	readonly instagram: URL | null;
}

const initialState: ProfileState = {
	info: {
		userId: 0,
		fullName: "",
		aboutMe: "",
		photos: {
			large: "/Images/Ava/Cosmic-animals",
			small: "/Images/Ava/Cosmic-animals",
		},
		contacts: {},
		followed: false,
		lookingForAJob: true,
		lookingForAJobDescription: "",
		status: "",
	},
	isLoading: false,
};

const profileStore = createSlice({
	initialState,
	name: "profile",
	reducers: {
		resetProfile: (state) => {
			Object.assign(state, initialState);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadProfileThunk.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loadProfileThunk.fulfilled, (state, { payload }) => {
				state.info = payload;
				state.isLoading = false;
			})
			.addCase(loadProfileThunk.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(updateStatusThunk.fulfilled, (state, { payload }) => {
				state.info.status = payload;
			})
			.addCase(updatePhotosThunk.fulfilled, (state, { payload }) => {
				state.info.photos = payload;
			});
	},
});

export const loadProfileThunk = createAsyncThunk<ProfileInfo, number>(
	"profile/loadProfile",
	async (id) => {
		return await getProfileWithStatusApi(id);
	}
);

export const updateStatusThunk = createAsyncThunk<string, string>(
	"profile/updateStatus",
	async (status) => {
		await updateStatusApi(status);
		return status;
	}
);

export const updatePhotosThunk = createAsyncThunk<Photos, File>(
	"profile/updatePhotos",
	async (photo) => {
		const response = await updatePhotoApi(photo);
		if (response.resultCode) {
			throw new Error(response.messages.join(", "));
		}

		return response.data;
	}
);

export const updateProfileThunk = createAsyncThunk(
	"profile/updateProfile",
	async () => {
		null;
	}
);

export default profileStore.reducer;

export const { resetProfile } = profileStore.actions;

const selfSelector = (state: Store) => state.profile;

export const selectProfileInfo = createSelector(
	selfSelector,
	(state) => state.info
);

export const selectLoadingProfile = createSelector(
	selfSelector,
	(state) => state.isLoading
);
