import { Loading } from "../Loading/Loading";

export const addLoading = (Component) => {
  return (props) => {
    return props.isLoading ? (
      <Loading className={props.className} />
    ) : (
      <Component {...props} />
    );
  };
};
