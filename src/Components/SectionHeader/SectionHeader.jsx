import SectionHeaderStyle from "./SectionHeader.module.css";

function SectionHeader(props) {
  return (
    <h2 className={`${SectionHeaderStyle.header} ${props.className}`}>
      {props.content}
    </h2>
  );
}

export default SectionHeader;
