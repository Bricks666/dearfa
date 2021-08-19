import { Dialog } from "./Dialog/Dialog";

export const RenderDialogsList = (users, className) => {
  return users.map((user) => {
    return <Dialog className={className} name={user.id} id={user.id} key={user.id}/>;
  });
};
