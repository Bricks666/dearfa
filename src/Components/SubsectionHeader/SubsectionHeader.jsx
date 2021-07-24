import SubsectionHeaderStyle from "./SubsectionHeader.module.css";

function SubsectionHeader(props) {
  return (
    <h3 className={`${SubsectionHeaderStyle.header} ${props.className}`}>
      {props.content}
    </h3>
  );
}

export default SubsectionHeader;
