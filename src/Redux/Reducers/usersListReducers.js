import { initialState } from "../initialState";
import { followUserReducer } from "./UsersReducers/followUserReducer";
import { unfollowUserReducer } from "./UsersReducers/unfollowUserReducer";
import { addUsers } from "./UsersReducers/addUsers";
import { nextUsersPage } from "./UsersReducers/nextUsersPage";
import { loadingReducer } from "./UsersReducers/loadingReducer";

export const usersListReducers = (state = initialState.users, action) => {
  state = followUserReducer(state, action);
  state = unfollowUserReducer(state, action);
  state = addUsers(state, action);
  state = nextUsersPage(state, action);
  state = loadingReducer(state, action);

  return state;
};
