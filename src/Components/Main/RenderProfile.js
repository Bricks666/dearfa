import { Profile } from "../Profile/Profile";
import { Route } from "react-router-dom";

export const RenderProfile = (store, className) => {
  const arr = Object.values(store.getState().users);
  return arr.map((user) => {
    return (
      <Route path={`/profile/${user.info.id}`} key={user.info.id}>
        <Profile
          className={className}
          user={user}
          posts={store.getState().posts}
          stateFields={store.getState().stateFields}
          dispatch={store.dispatch}
        />
      </Route>
    );
  });
};
