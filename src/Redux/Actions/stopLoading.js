import { STOP_LOADING } from "./Constants";

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};
