import Chat from "../Chat/Chat";
import DialogsList from "../DialogsList/DialogsList";
import SectionHeader from "../SectionHeader/SectionHeader";

import DialogsStyle from "./Dialogs.module.css";

function Dialogs(props) {
  return (
    <main className={`${props.className ?? ""} ${DialogsStyle.dialogs}`}>
      <SectionHeader className={DialogsStyle.heading}>Диалоги</SectionHeader>
      <DialogsList className={DialogsStyle.dialogsList} />
      <Chat className />
    </main>
  );
}

export default Dialogs;
