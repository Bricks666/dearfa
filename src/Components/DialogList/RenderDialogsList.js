import { Dialog } from "./Dialog/Dialog";

export const RenderDialogsList = (dialogs, dispatch, className) => {
  return dialogs.map((dialog) => {
    return (
      <Dialog
        className={className}
        author={dispatch({ type: "GET-USER-INFO", id: dialog.id })}
        key={dialog.id}
      />
    );
  });
};
