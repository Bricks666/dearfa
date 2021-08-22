import { Profile } from "../Profile/Profile";
import { Route } from "react-router-dom";

export const RenderProfile = (data, className) => {
  const arr = Array.from(data.users, ([name, value]) => value);
  return arr.map((user) => {
    return (
      <Route path={`/profile/${user.info.id}`} key={user.info.id}>
        <Profile
          className={className}
          data={user}
          enterWords={data.enterWords}
          valueFields={data.valueFields}
        />
      </Route>
    );
  });
};
