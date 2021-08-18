import { Profile } from "../Profile/Profile";
import { Route } from "react-router-dom";

export const RenderProfile = (info, className) => {
  const arr = Array.from(info, ([name, value]) => value);
  return arr.map((user) => {
    return (
      <Route path={`/profile/${user.info.id}`} key={user.info.id}>
        <Profile className={className} data={user} />
      </Route>
    );
  });
};
