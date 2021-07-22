function Picture(props) {
  return (
    <picture className={props.className}>
      <source
        srcSet={props.oneXUrl + ".avif 1x," + props.twoXUrl + ".avif 2x"}
        type="image/avif"
      ></source>
      <source
        srcSet={props.oneXUrl + ".webp 1x," + props.twoXUrl + ".webp 2x"}
        type="image/webp"
      ></source>
      <img
        src={props.oneXUrl + ".jpg 1x"}
        srcSet={props.oneXUrl + ".jpg 2x,"}
        alt={props.alt}
      />
    </picture>
  );
}

export default Picture;
