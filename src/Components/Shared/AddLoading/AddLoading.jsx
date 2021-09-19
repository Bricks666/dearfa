import { Loading } from "../Loading/Loading";

export const addLoading = (Component) => {
  return (props) => {

    return props.isLoading ? <Loading /> : <Component {...props} />;
  };
};
