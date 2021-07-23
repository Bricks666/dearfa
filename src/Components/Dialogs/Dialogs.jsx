import DialogsList from "../DialogsList/DialogsList";

import DialogsStyle from "./Dialogs.module.css";

function Dialogs(props) {
  return (
    <main className={`${props.className} ${DialogsStyle.dialogs}`}>
      <h2 className={DialogsStyle.heading}>Диалоги</h2>
      <DialogsList className={DialogsStyle.dialogsList}/>
    </main>
  );
}

export default Dialogs;
