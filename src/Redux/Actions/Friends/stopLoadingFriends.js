import { STOP_LOADING_FRIENDS } from "../Constants";

export const stopLoadingFriends = () => {
  return {
    type: STOP_LOADING_FRIENDS,
  };
};
