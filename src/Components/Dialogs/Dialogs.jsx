import Chat from "../Chat/Chat";
import DialogsList from "../DialogsList/DialogsList";
import Messages from "../Messages/Messages";
import SectionHeader from "../SectionHeader/SectionHeader";

import DialogsStyle from "./Dialogs.module.css";

function Dialogs(props) {
  return (
    <main className={`${props.className ?? ""} ${DialogsStyle.dialogs}`}>
      <SectionHeader className={DialogsStyle.heading} content="Диалоги" />
      <DialogsList className={DialogsStyle.dialogsList} />
      <Chat className/>
    </main>
  );
}

export default Dialogs;
