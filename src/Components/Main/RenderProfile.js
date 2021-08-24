import { Profile } from "../Profile/Profile";
import { Route } from "react-router-dom";

export const RenderProfile = (store, className) => {
  const arr = Object.values(store.state.users);
  return arr.map((user) => {
    return (
      <Route path={`/profile/${user.info.id}`} key={user.info.id}>
        <Profile
          className={className}
          user={user}
          posts={store.state.posts}
          stateFields={store.state.stateFields}
          addPost={store.addPost}
          toggleLike={store.toggleLike}
          enterWords={store.enterWords}
          getUserInfo={store.getUserInfo}
        />
      </Route>
    );
  });
};
