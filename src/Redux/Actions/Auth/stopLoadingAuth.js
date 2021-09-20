import { STOP_LOADING_AUTH } from "../Constants";

export const stopLoadingAuth = () => {
  return {
    type: STOP_LOADING_AUTH,
  };
};
