import { Dialog } from "./Dialog/Dialog";

export const RenderDialogsList = (dialogs, className) => {
  return dialogs.map((dialog) => {
    return <Dialog className={className} />;
  });
};
