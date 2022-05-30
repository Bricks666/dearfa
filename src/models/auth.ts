import { getAuthApi, getCaptchaURLApi, loginApi, logoutApi } from "@/api";
import { URL } from "@/interfaces/common";
import {
	createAsyncThunk,
	createSelector,
	createSlice,
} from "@reduxjs/toolkit";
import { Store } from ".";

export interface AuthState {
	readonly userId: number;
	readonly login: string;
	readonly isAuthorization: boolean;
	readonly captchaURL: URL | null;
}

const initialState: AuthState = {
	userId: 0,
	login: "asdsasd",
	isAuthorization: true,
	captchaURL: null,
};

const authStore = createSlice({
	initialState,
	name: "auth",
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(authThunk.pending, (state) => {
				state.isAuthorization = true;
			})
			.addCase(authThunk.fulfilled, (state, { payload }) => {
				state.isAuthorization = false;
				state.login = payload.login;
				state.userId = payload.id;
			})
			.addCase(authThunk.rejected, (state) => {
				state.isAuthorization = false;
			})
			.addCase(logoutThunk.fulfilled, (state) => {
				Object.assign(state, initialState);
			})
			.addCase(loadCaptchaThunk.fulfilled, (state, { payload }) => {
				state.captchaURL = payload;
			});
	},
});

export const authThunk = createAsyncThunk("auth/auth", async () => {
	const response = await getAuthApi();
	if (response.resultCode) {
		throw new Error();
	}

	return response.data;
});

export const loadCaptchaThunk = createAsyncThunk(
	"login/loadCaptcha",
	async () => {
		const response = await getCaptchaURLApi();
		return response.url;
	}
);

interface LoginParams {
	readonly email: string;
	readonly password: string;
	readonly rememberMe: boolean;
}

export const loginThunk = createAsyncThunk<void, LoginParams>(
	"login/login",
	async (credentials, { dispatch }) => {
		const response = await loginApi(credentials);
		if (response.resultCode) {
			throw new Error(response.messages.join(", "));
		}

		dispatch(authThunk());
	}
);

export const logoutThunk = createAsyncThunk("login/logout", async () => {
	const response = await logoutApi();
	if (response.resultCode) {
		throw new Error(response.messages.join(", "));
	}
});

export default authStore.reducer;

const selfSelector = (state: Store) => state.auth;

export const selectAuthId = createSelector(
	selfSelector,
	(state) => state.userId
);

export const selectAuthLogin = createSelector(
	selfSelector,
	(state) => state.login
);
export const selectAuthorization = createSelector(
	selfSelector,
	(state) => state.isAuthorization
);
export const selectCaptchaURL = createSelector(
	selfSelector,
	(state) => state.captchaURL
);
