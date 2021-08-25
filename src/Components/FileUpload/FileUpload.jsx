import React from "react";

import FileUploadStyle from "./FileUpload.module.css";

export const FileUpload = (props) => {
    return (
        <>
            <input type="file" className="visibility-hidden" id="upload" />
            <label
                className={`${props.className} ${FileUploadStyle.label}`}
                htmlFor="upload"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={FileUploadStyle.svg}
                    viewBox="0 0 433.5 433.5 "
                    width="24"
                    height="24"
                >
                    <path d="M140 332h153V179h102L217 0 38 179h102zM38 383h357v51H38z" />
                </svg>
            </label>
        </>
    );
};
