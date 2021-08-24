import { Dialog } from "./Dialog/Dialog";

export const RenderDialogsList = (dialogs, getInfo, className) => {
  return dialogs.map((dialog) => {
    return (
      <Dialog
        className={className}
        author={getInfo(dialog.id)}
        key={dialog.id}
      />
    );
  });
};
