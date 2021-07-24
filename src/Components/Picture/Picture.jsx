function Picture(props) {
  return (
    <picture className={props.className?? ""}>
      <source
        srcSet={(props.oneXSrc??"") + ".avif 1x," + (props.twoXSrc??"") + ".avif 2x"}
        type="image/avif"
      ></source>
      <source
        srcSet={(props.oneXSrc??"") + ".webp 1x," + (props.twoXSrc??"") + ".webp 2x"}
        type="image/webp"
      ></source>
      <img
        src={(props.oneXSrc ?? "") + ".jpg 1x"}
        srcSet={(props.oneXSrc ?? "") + ".jpg 2x,"}
        alt={props.alt ?? ""}
      />
    </picture>
  );
}

export default Picture;
