"use client";
import React, { useCallback } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";

type OnDropFunction = Required<DropzoneOptions>["onDrop"];
function FileUploadTest() {
  const onDrop = useCallback<OnDropFunction>((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop, multiple: true });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here ...</p> : <p>Drag and drop some files here, or click to select files</p>}
      <ul>
        {acceptedFiles.map((file) => (
          <li key={file.name}>
            {file.name} - {file.size} bytes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileUploadTest;
