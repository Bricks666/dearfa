import React from "react";

function Picture(props) {
  return (
    <picture className={props.className ?? ""}>
      <source
        srcSet={
          (props.oneXSrc ?? "") +
          ".avif 1x," +
          (props.twoXSrc ?? "") +
          ".avif 2x"
        }
        type="image/avif"
      ></source>
      <source
        srcSet={
          (props.oneXSrc ?? "") +
          ".webp 1x," +
          (props.twoXSrc ?? "") +
          ".webp 2x"
        }
        type="image/webp"
      ></source>
      <img
        className={props.className ?? ""}
        src={(props.oneXSrc ?? "") + ".jpg 1x"}
        srcSet={(props.twoXSrc ?? "") + ".jpg 2x,"}
        alt={props.alt ?? ""}
      />
    </picture>
  );
}

export default Picture;
